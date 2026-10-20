"""Dependency-free checks of the committed static crawl and semantic surfaces."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote, urljoin
import json
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
ORIGIN = "https://www.amicidellarussiaimperiale-terzaroma.it"
HOME = ORIGIN + "/"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9", "image": "http://www.google.com/schemas/sitemap-image/1.1"}


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.meta, self.links, self.ids, self.h1, self.images, self.graphs = [], [], set(), [], [], []
        self.lang, self.main, self.heading, self.script, self.buffer = "", False, False, False, ""
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html": self.lang = a.get("lang")
        if tag == "meta": self.meta.append(a)
        if tag in ("a", "link"): self.links.append(a)
        if tag == "main": self.main = True
        if tag == "img" and self.main: self.images.append(a["src"])
        if tag == "h1": self.heading = True
        if a.get("id"):
            assert a["id"] not in self.ids, "Duplicate HTML ID: " + a["id"]
            self.ids.add(a["id"])
        if tag == "script" and a.get("type") == "application/ld+json":
            self.script, self.buffer = True, ""

    def handle_endtag(self, tag):
        if tag == "main": self.main = False
        if tag == "h1": self.heading = False
        if tag == "script" and self.script:
            data = json.loads(self.buffer)
            assert data["@context"] == "https://schema.org"
            self.graphs.extend(data.get("@graph", [data]))
            self.script, self.buffer = False, ""

    def handle_data(self, data):
        if self.script: self.buffer += data
        if self.heading: self.h1.append(data)

    def metadata(self, name):
        return [a["content"] for a in self.meta if a.get("name") == name]


pages = {file.name: Page(file.read_text(encoding="utf-8")) for file in ROOT.glob("*.html")}


def local_target(link):
    parsed = urlsplit(link)
    assert parsed.scheme == "https" and parsed.netloc == urlsplit(ORIGIN).netloc, link
    assert not parsed.query, "Canonical discovery links must not contain queries: " + link
    relative = unquote(parsed.path.lstrip("/")) or "index.html"
    target = ROOT / relative
    assert ROOT in target.resolve().parents and target.is_file(), "Missing target: " + link
    if parsed.fragment and relative.endswith(".html"):
        assert parsed.fragment in pages[relative].ids, "Missing content anchor: " + link
    return relative


indexable = {}
excluded = []
for filename, page in pages.items():
    robots = page.metadata("robots")
    assert len(robots) == 1, filename + ": one explicit indexing directive"
    if "noindex" in robots[0]:
        excluded.append(filename)
        continue
    canonical = [a["href"] for a in page.links if a.get("rel") == "canonical"]
    assert len(canonical) == 1 and local_target(canonical[0]) == filename
    assert not urlsplit(canonical[0]).fragment
    assert len(page.metadata("description")) == 1
    assert len(re.findall(r"<h1\b", (ROOT / filename).read_text(encoding="utf-8"))) == 1
    assert any(a.get("rel") == "sitemap" and a.get("href") == "/sitemap.xml" for a in page.links)
    assert any(a.get("rel") == "describedby" and a.get("href") == "/llms.txt" for a in page.links)
    indexable[canonical[0]] = (filename, page)
    ids = [node["@id"] for node in page.graphs if "@id" in node]
    assert len(ids) == len(set(ids)), filename + ": duplicate graph entity"
    web = [node for node in page.graphs if node.get("@id") == canonical[0] + "#webpage"]
    assert len(web) == 1, filename + ": one static page entity"
    web = web[0]
    assert web["name"] == " ".join(" ".join(page.h1).split()), filename
    assert web["description"] == page.metadata("description")[0], filename
    assert web["inLanguage"].split("-")[0] == page.lang, filename
    assert web["isPartOf"]["@id"] == HOME + "#website"
    assert web["publisher"]["@id"] == HOME + "#organization"
    assert "SearchAction" not in json.dumps(page.graphs), "Do not advertise nonexistent site search"
    for link in web.get("relatedLink", []): local_target(link)
    for node in page.graphs:
        if node.get("@type") == "BreadcrumbList":
            items = node["itemListElement"]
            assert [item["position"] for item in items] == list(range(1, len(items) + 1))
            assert items[0]["item"] == HOME and items[-1]["item"] == canonical[0]
            for item in items: local_target(item["item"])
        if node.get("@type") == "ItemList":
            assert node["numberOfItems"] == len(node["itemListElement"])
            assert [item["position"] for item in node["itemListElement"]] == list(range(1, node["numberOfItems"] + 1))
            for item in node["itemListElement"]:
                if item["url"].startswith(ORIGIN): local_target(item["url"])
        if node.get("@type") in ("Article", "Event"):
            assert "breadcrumb" not in node
            assert node["mainEntityOfPage"]["@id"] == web["@id"]
            assert node["@id"] == web["mainEntity"]["@id"]
    alternates = {a["hreflang"]: a["href"] for a in page.links if a.get("rel") == "alternate" and "hreflang" in a}
    if alternates:
        assert set(alternates) == {"it", "en", "ru", "x-default"}
        assert alternates[page.lang] == canonical[0]
        for link in alternates.values():
            target = pages[local_target(link)]
            assert {a["hreflang"]: a["href"] for a in target.links if a.get("hreflang")} == alternates

tree = ET.parse(ROOT / "sitemap.xml")
urls = tree.findall("s:url", NS)
locations = [entry.find("s:loc", NS).text for entry in urls]
assert len(locations) == len(set(locations))
assert set(locations) == set(indexable), "Sitemap must cover exactly the indexable canonical HTML pages"
image_count = 0
for entry in urls:
    canonical = entry.find("s:loc", NS).text
    assert entry.find("s:lastmod", NS) is None, "No guessed last modification dates"
    assert entry.find("s:priority", NS) is None and entry.find("s:changefreq", NS) is None
    images = [node.text for node in entry.findall("image:image/image:loc", NS)]
    actual = {urljoin(canonical, src) for src in indexable[canonical][1].images
              if urlsplit(urljoin(canonical, src)).netloc == urlsplit(ORIGIN).netloc}
    assert set(images) == actual and len(images) == len(set(images))
    for image in images: local_target(image)
    image_count += len(images)

robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
directives = [line.strip() for line in robots.splitlines() if line.strip() and not line.startswith("#")]
assert directives == ["User-agent: *", "Allow: /", "Sitemap: " + ORIGIN + "/sitemap.xml"]
assert all(filename not in locations for filename in excluded)

llms = (ROOT / "llms.txt").read_text(encoding="utf-8")
assert llms.startswith("# Circolo Internazionale") and "\n> " in llms and "\n## Optional\n" in llms
discovery = re.findall(r"^- \[[^\]]+\]\((https://[^\s)]+)\):", llms, re.MULTILINE)
assert len(discovery) == len(set(discovery))
assert set(indexable).issubset(set(discovery))
for link in discovery:
    if link.startswith(ORIGIN): local_target(link)
assert "share one URL" in llms and "original Word document" in llms

for filename in ("index.html", "contatti.html"):
    organization = next(node for node in pages[filename].graphs if node.get("@id") == HOME + "#organization")
    assert organization["foundingDate"] == "2026"
    assert "https://www.youtube.com/@AMICIDELLARUSSIAIMPERIALE" in organization["sameAs"]
    assert {point["email"] for point in organization["contactPoint"] if "email" in point} == {
        "info@amicidellarussia.it", "segreteria@amicidellarussia.it", "presidenza@amicidellarussia.it", "amicidellarussia@pec.net"
    }
assert next(node for node in pages["galleria.html"].graphs if node["@type"] == "ItemList")["numberOfItems"] == 7
assert next(node for node in pages["attualita.html"].graphs if node["@type"] == "ItemList")["numberOfItems"] == 4
print(json.dumps({"status": "PASS", "canonicalPages": len(indexable), "excludedNoindexPages": len(excluded),
                  "contentImages": image_count, "staticSemanticPages": len(indexable), "llmsLinks": len(discovery),
                  "reciprocalLanguageVariants": 3}, indent=2))
