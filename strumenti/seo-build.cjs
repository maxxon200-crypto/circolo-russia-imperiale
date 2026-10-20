// Static SEO only: no browser dependency, network request, CMS or search service.
// HTML is the source of truth for titles, descriptions, images and existing facts.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const origin = 'https://www.amicidellarussiaimperiale-terzaroma.it';
const home = origin + '/';
const organizationId = home + '#organization';
const websiteId = home + '#website';
const channel = 'https://www.youtube.com/@AMICIDELLARUSSIAIMPERIALE';
const topics = {
  history: 'Storia e cultura della Russia imperiale',
  romanov: 'Dinastia Romanov e Casa Imperiale',
  orthodox: 'Tradizione ortodossa russa',
  exchange: 'Relazioni culturali tra Italia e Russia',
  events: 'Eventi e attività culturali del Circolo'
};
// File, actual navigation parent, Schema.org page type, relevant visible topics.
// Only real, separately served language URLs are declared in HTML hreflang.
const routes = [
  ['index.html', null, 'WebPage', ['history', 'romanov', 'orthodox', 'exchange'], 'Il Circolo'],
  ['il-circolo.html', 'index.html', 'AboutPage', ['history', 'romanov', 'orthodox', 'exchange'], 'Il Circolo'],
  ['la-nostra-storia.html', 'il-circolo.html', 'WebPage', ['exchange'], 'Il Circolo'],
  ['contatti.html', 'index.html', 'ContactPage', [], 'Il Circolo'],
  ['tesseramento.html', 'index.html', 'WebPage', [], 'Il Circolo'],
  ['partnership.html', 'index.html', 'WebPage', ['exchange'], 'Il Circolo'],
  ['storia.html', 'index.html', 'CollectionPage', ['history', 'romanov'], 'Storia e spiritualità'],
  ['articolo-famiglia-romanov.html', 'storia.html', 'WebPage', ['history', 'romanov'], 'Storia e spiritualità'],
  ['articolo-famiglia-romanov-oggi.html', 'storia.html', 'WebPage', ['romanov'], 'Storia e spiritualità'],
  ['chiesa-ortodossa.html', 'index.html', 'WebPage', ['orthodox'], 'Storia e spiritualità'],
  ['feste.html', 'index.html', 'CollectionPage', ['orthodox', 'history', 'romanov'], 'Storia e spiritualità'],
  ['eventi.html', 'index.html', 'CollectionPage', ['events', 'exchange'], 'Eventi e galleria'],
  ['evento-liberiamo-la-patria-milano-2026.html', 'eventi.html', 'WebPage', ['events'], 'Eventi e galleria'],
  ['evento-guerra-patriottica-1812-milano-2026.html', 'eventi.html', 'WebPage', ['history', 'events'], 'Eventi e galleria'],
  ['galleria.html', 'index.html', 'CollectionPage', ['events', 'exchange'], 'Eventi e galleria'],
  ['evento-liturgia-famiglia-imperiale-milano-2026.html', 'galleria.html', 'WebPage', ['orthodox', 'romanov', 'events'], 'Eventi e galleria'],
  ['evento-cerimonia-villa-sormani-missaglia-2026.html', 'galleria.html', 'WebPage', ['orthodox', 'exchange', 'events'], 'Eventi e galleria'],
  ['attualita.html', 'index.html', 'CollectionPage', ['history', 'orthodox', 'exchange'], 'Attualità e approfondimenti'],
  ['articolo-processione-mosca-2026.html', 'attualita.html', 'WebPage', ['orthodox'], 'Attualità e approfondimenti'],
  ['articolo-guerra-patriottica-1812.html', 'attualita.html', 'WebPage', ['history', 'events'], 'Attualità e approfondimenti'],
  ['article-patriotic-war-1812.html', 'attualita.html', 'WebPage', ['history', 'events'], 'English and Russian articles'],
  ['article-otechestvennaya-voina-1812.html', 'attualita.html', 'WebPage', ['history', 'events'], 'English and Russian articles'],
  ['privacy.html', 'index.html', 'WebPage', [], 'Optional'],
  ['cookie.html', 'index.html', 'WebPage', [], 'Optional']
];
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const normalize = value => value.replace(/\r\n/g, '\n');
function text(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&#(?:39|x27);|&apos;/g, "'").replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}
const xml = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const url = file => file === 'index.html' ? home : origin + '/' + file;
const ref = id => ({ '@id': id });
const asTopics = keys => keys.map(key => ({ '@type': 'Thing', name: topics[key] }));
const scriptPattern = /[ \t]*<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\r?\n?/g;
function nodes(html) {
  return [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap(match => { const value = JSON.parse(match[1]); return value['@graph'] || [value]; });
}
const pages = routes.map(([file, parent, type, keys, group]) => {
  const html = read(file);
  assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), file + ': noindex must not enter the sitemap');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
  assert.equal(canonical, url(file), file + ': unexpected canonical');
  const main = html.match(/<main\b[\s\S]*?<\/main>/)[0];
  // YouTube thumbnails belong to another host; list only our own content assets.
  const images = [...new Set([...main.matchAll(/<img\b[^>]*src="([^"]+)"/g)]
    .map(match => new URL(text(match[1]), canonical)).filter(image => image.origin === origin).map(image => image.href))];
  return {
    file, parent, type, keys, group, html, main, images, canonical,
    lang: html.match(/<html\b[^>]*lang="([^"]+)"/)[1],
    title: text(html.match(/<title>([\s\S]*?)<\/title>/)[1]),
    heading: text(main.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]),
    description: text(html.match(/<meta name="description" content="([^"]+)"/)[1])
  };
});
const byFile = new Map(pages.map(page => [page.file, page]));
const allIndexableFiles = fs.readdirSync(root).filter(file => file.endsWith('.html') && !/<meta name="robots" content="[^"]*noindex/.test(read(file)));
assert.deepEqual([...allIndexableFiles].sort(), [...byFile.keys()].sort(), 'Register every new indexable page in routes');

function breadcrumb(page) {
  const trail = [];
  for (let current = page; current; current = byFile.get(current.parent)) trail.unshift(current);
  return {
    '@type': 'BreadcrumbList', '@id': page.canonical + '#breadcrumb',
    itemListElement: trail.map((entry, index) => ({
      '@type': 'ListItem', position: index + 1,
      name: index === 0 ? (page.lang === 'ru' ? 'Главная' : 'Home') : entry.heading,
      item: entry.canonical
    }))
  };
}
function graphFor(page) {
  // Preserve editorial facts (dates, venues, pictures, attribution); do not invent
  // authors, publication dates, offers, reviews, affiliations or a SearchAction.
  const existing = nodes(page.html);
  const graph = existing.filter(node => ['Organization', 'WebSite', 'Article', 'Event'].includes(node['@type']))
    .map(node => { const copy = { ...node }; delete copy['@context']; return copy; });
  if (page.file === 'contatti.html' && !graph.some(node => node['@id'] === organizationId)) {
    const oldOrganization = existing.find(node => node['@type'] === 'ContactPage')?.about;
    assert.ok(oldOrganization?.contactPoint, 'Contact schema must retain its contact points');
    graph.push({ ...oldOrganization });
  }
  const entity = graph.find(node => ['Article', 'Event'].includes(node['@type']));
  if (entity) {
    entity['@id'] = page.canonical + (entity['@type'] === 'Article' ? '#article' : '#event');
    entity.mainEntityOfPage = ref(page.canonical + '#webpage');
    if (page.keys.length) entity.about = asTopics(page.keys);
    delete entity.breadcrumb; // breadcrumb belongs to WebPage, not Article/Event.
  }
  const organization = graph.find(node => node['@id'] === organizationId);
  if (organization) {
    organization.foundingDate = '2026';
    organization.foundingLocation = { '@type': 'Place', name: 'Milano, Italia' };
    organization.sameAs = [...new Set([...(organization.sameAs || []), channel])];
    organization.knowsAbout = asTopics(['history', 'romanov', 'orthodox', 'exchange']);
  }
  const website = graph.find(node => node['@id'] === websiteId);
  if (website) website.about = ref(organizationId);
  const webPage = {
    '@type': page.type, '@id': page.canonical + '#webpage', url: page.canonical,
    name: page.heading, description: page.description,
    inLanguage: { it: 'it-IT', en: 'en', ru: 'ru-RU' }[page.lang],
    isPartOf: ref(websiteId), publisher: ref(organizationId)
  };
  if (page.keys.length) webPage.about = asTopics(page.keys);
  if (entity) webPage.mainEntity = ref(entity['@id']);
  if (['index.html', 'il-circolo.html', 'contatti.html'].includes(page.file)) webPage.about = ref(organizationId);
  if (page.images.length) webPage.primaryImageOfPage = { '@type': 'ImageObject', url: page.images[0] };
  if (page.parent) {
    webPage.breadcrumb = ref(page.canonical + '#breadcrumb');
    graph.push(breadcrumb(page));
  }
  const links = [...new Set([...page.main.matchAll(/<a\b[^>]*href="([^"]+)"/g)]
    .map(match => new URL(text(match[1]), page.canonical))
    .filter(link => link.origin === origin && link.pathname !== new URL(page.canonical).pathname && byFile.has(link.pathname.slice(1) || 'index.html'))
    .map(link => link.href))];
  if (links.length) webPage.relatedLink = links;
  if (page.type === 'CollectionPage') {
    // List only content actually linked from this page; no synthetic result set.
    const children = [...page.main.matchAll(/<article\b([^>]*)>([\s\S]*?)<\/article>/g)]
      .map(match => {
        const id = match[1].match(/\bid="([^"]+)"/)?.[1];
        const href = match[2].match(/<a\b[^>]*href="([^"]+)"/)?.[1];
        return { url: id ? page.canonical + '#' + id : href ? new URL(text(href), page.canonical).href : null,
          name: text(match[2].match(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/)?.[1] || '') };
      }).filter(item => item.name && item.url);
    const items = children.length ? children : links.filter(link => byFile.get(new URL(link).pathname.slice(1) || 'index.html').parent === page.file)
      .map(link => ({ url: link, name: byFile.get(new URL(link).pathname.slice(1)).heading }));
    if (items.length) {
      const listId = page.canonical + '#content-list';
      webPage.mainEntity = ref(listId);
      graph.push({ '@type': 'ItemList', '@id': listId, numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, url: item.url })) });
    }
  }
  graph.push(webPage);
  return { '@context': 'https://schema.org', '@graph': graph };
}

const output = new Map();
for (const page of pages) {
  const eol = page.html.includes('\r\n') ? '\r\n' : '\n';
  const graph = JSON.stringify(graphFor(page), null, 2).replace(/</g, '\\u003c').split('\n').map(line => '  ' + line).join(eol);
  const block = [
    '  <link rel="sitemap" type="application/xml" href="/sitemap.xml">',
    '  <link rel="describedby" type="text/plain" href="/llms.txt">',
    '  <script type="application/ld+json" id="semantic-data">', graph, '  </script>'
  ].join(eol);
  const html = page.html.replace(scriptPattern, '')
    .replace(/[ \t]*<link rel="(?:sitemap|describedby)"[^>]*>\r?\n?/g, '')
    .replace(/\s*<\/head>/, eol + block + eol + '</head>');
  // This generator must never rewrite visible content, forms, navigation or styles.
  assert.equal(html.slice(html.indexOf('<body>')), page.html.slice(page.html.indexOf('<body>')));
  output.set(page.file, html);
}

const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>',
  '<!-- Generated by strumenti/seo-build.cjs in write mode. Canonical, indexable pages only. -->',
  '<!-- No invented lastmod, priority or changefreq values. Hreflang is maintained in HTML. -->',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'];
for (const page of pages) {
  sitemap.push('  <url>', '    <loc>' + xml(page.canonical) + '</loc>');
  for (const image of page.images) sitemap.push('    <image:image>', '      <image:loc>' + xml(image) + '</image:loc>', '    </image:image>');
  sitemap.push('  </url>');
}
sitemap.push('</urlset>', '');
output.set('sitemap.xml', sitemap.join('\n'));
output.set('robots.txt', [
  '# Public pages and rendering assets are crawlable for all compliant crawlers.',
  '# Private placeholders, thank-you pages and unfinished articles use HTML noindex.',
  '# Do not disallow those pages: crawlers must be able to read their noindex tag.',
  '# This file is not authentication or an AI-training permission policy.',
  'User-agent: *', 'Allow: /', '', 'Sitemap: ' + origin + '/sitemap.xml', ''
].join('\n'));

const llms = [
  '# Circolo Internazionale Amici della Russia Imperiale - Terza Roma', '',
  '> Official website of a non-partisan, non-profit cultural association founded in Milan in 2026, dedicated to the history, art and spirituality of Imperial Russia, the Romanov dynasty, and cultural exchange between Italy and Russia.', '',
  'Italian name: Circolo Internazionale Amici della Russia Imperiale - Terza Roma. English: International Circle of Friends of Imperial Russia - Third Rome. Russian: Международная ассоциация друзей Российской Империи - Третий Рим.', '',
  'Canonical website: ' + home + '. The association describes its own identity and viewpoints on the About page; it is not the Russian Orthodox Church or the Imperial House itself. Event dates refer to the actual event, not the publication date. Past activities are collected in the Gallery.', '',
  'Italian is the default source language. English and Russian translations are available through the language selector. Most translations share one URL and use JavaScript; only the three 1812 conference reports below have separate language URLs. HTML pages contain the original Italian content without JavaScript (the English/Russian report URLs contain their own source language).', '',
  'The links below point to public HTML sources, except the explicitly labelled original Word document. This is a content guide, not an indexing directive or a permission grant. robots.txt and page-level robots tags define crawl/indexing guidance.', ''
];
for (const group of [...new Set(pages.map(page => page.group))]) {
  llms.push('## ' + group, '');
  for (const page of pages.filter(page => page.group === group)) llms.push('- [' + page.heading + '](' + page.canonical + '): ' + page.description);
  if (group === 'Attualità e approfondimenti') llms.push('- [Mosca terza Roma - documento Word originale in italiano](' + origin + '/assets/Mosca%20terza%20Roma.docx): Fonte originale scaricabile, collegata dalla pagina Attualità.');
  if (group === 'Optional') llms.push('- [Canale YouTube ufficiale](' + channel + '): Video del Circolo.', '- [Pagina Facebook ufficiale](https://www.facebook.com/russia.imperiale): Aggiornamenti del Circolo.');
  llms.push('');
}
output.set('llms.txt', llms.join('\n'));

if (require.main === module) {
  const write = process.argv.includes('--write');
  const check = process.argv.includes('--check');
  assert.ok(write !== check, 'Usage: node strumenti/seo-build.cjs --write | --check');
  const changed = [];
  for (const [file, expected] of output) {
    const current = fs.existsSync(path.join(root, file)) ? read(file) : '';
    if (normalize(current) !== normalize(expected)) {
      changed.push(file);
      if (write) fs.writeFileSync(path.join(root, file), expected, 'utf8');
    }
  }
  if (check) assert.deepEqual(changed, [], 'SEO output out of date: run node strumenti/seo-build.cjs --write');
  console.log(`SEO ${write ? 'generated' : 'check passed'}: ${pages.length} canonical pages, sitemap + robots + llms, ${changed.length} changed files`);
}
module.exports = { pages, output };
