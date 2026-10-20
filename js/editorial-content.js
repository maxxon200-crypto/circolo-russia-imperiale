/*
 * Registro editoriale stabile.
 *
 * I testi restano nel dizionario esistente (js/i18n.js); qui sono raccolti
 * soltanto identità, media e chiavi necessarie per collegare una stessa
 * storia alle sue versioni localizzate e agli strumenti di validazione.
 */
(function (root, factory) {
  var records = factory();
  if (typeof module !== "undefined" && module.exports) { module.exports = records; }
  else { root.CIRCOLO_EDITORIAL_RECORDS = records; }
})(typeof self !== "undefined" ? self : this, function () {
  return [
    {
      id: "galleria-pozzolo-stramezzi",
      type: "gallery",
      asset: "assets/img/incontro-milano-18-ottobre-2026/6cfa9382-a6fe-4230-ab07-a01f960da18f.jpg",
      date: "2026-10-18",
      routes: { it: "galleria.html#incontro-pozzolo-stramezzi-2026" },
      keys: {
        date: "ga-pozzolo-date",
        title: "ga-pozzolo-title",
        body: ["ga-pozzolo-p1", "ga-pozzolo-p2"],
        photos: "ga-pozzolo-photos",
        imageAlt: ["ga-pozzolo-photo-1", "ga-pozzolo-photo-2", "ga-pozzolo-photo-3", "ga-pozzolo-photo-4", "ga-pozzolo-photo-5", "ga-pozzolo-photo-6"]
      }
    },
    {
      id: "galleria-maslenitsa-2025",
      type: "gallery",
      asset: "assets/img/galleria.2mar2025.jpg",
      date: "2025-03-02",
      routes: { it: "galleria.html#maslenitsa-milano-2025" },
      keys: {
        date: "ga-maslenitsa-date",
        title: "ga-maslenitsa-title",
        body: ["ga-maslenitsa-p1", "ga-maslenitsa-p2", "ga-maslenitsa-p3", "ga-maslenitsa-p4", "ga-maslenitsa-p5", "ga-maslenitsa-p6", "ga-maslenitsa-p7", "ga-maslenitsa-p8", "ga-maslenitsa-p9"],
        imageAlt: ["ga-maslenitsa-image-alt"],
        caption: "ga-maslenitsa-caption",
        signoff: "ga-maslenitsa-signoff",
        links: ["ga-maslenitsa-links", "ga-maslenitsa-anthem", "ga-maslenitsa-festival", "ga-maslenitsa-pinterest", "ga-maslenitsa-troubetzkoy", "ga-maslenitsa-restaurant"]
      }
    },
    {
      id: "una-russofobia-che-viene-da-lontano",
      type: "external",
      asset: "assets/img/una-russofobia-che-viene-da-lontano.jpg",
      date: "2022-03-15",
      url: "https://www.ricognizioni.it/una-russofobia-che-viene-da-lontano/",
      keys: {
        title: "at-russofobia-title",
        date: "at-russofobia-date",
        excerpt: "at-russofobia-excerpt",
        imageAlt: "at-russofobia-image-alt",
        readLabel: "at-russofobia-read",
        readAria: "at-russofobia-read-aria"
      }
    },
    {
      id: "mosca-terza-roma",
      type: "document",
      asset: "assets/Mosca terza Roma (1).jpg",
      document: "assets/Mosca terza Roma.docx",
      documentLanguage: "it",
      keys: {
        label: "at-terzaroma-source",
        title: "at-terzaroma-title",
        excerpt: "at-terzaroma-excerpt",
        imageAlt: "at-terzaroma-image-alt",
        readLabel: "at-terzaroma-read",
        readAria: "at-terzaroma-read-aria"
      }
    },
    {
      id: "evento-liberiamo-la-patria",
      type: "event",
      asset: "assets/img/liberiamo_la_patria.jpg",
      date: "2026-10-18",
      routes: { it: "evento-liberiamo-la-patria-milano-2026.html" },
      keys: {
        title: "ev-patria-title",
        date: "ev-patria-date",
        time: "ev-patria-time",
        venue: "ev-patria-venue",
        address: "ev-patria-address",
        details: "ev-patria-details",
        imageAlt: "ev-patria-image-alt",
        detailsLabel: "ev-patria-details-label"
      }
    },
    {
      id: "guerra-patriottica-1812",
      type: "article",
      asset: "assets/img/guerra-patriottica-1812-convegno-13-settembre-2026.webp",
      date: "2026-09-13",
      routes: {
        it: "articolo-guerra-patriottica-1812.html",
        en: "article-patriotic-war-1812.html",
        ru: "article-otechestvennaya-voina-1812.html"
      },
      keys: {
        label: "ed-1812-label",
        date: "ed-1812-date",
        title: "ed-1812-title",
        excerpt: "ed-1812-excerpt",
        imageAlt: "ed-1812-image-alt",
        readLabel: "ed-1812-read-label",
        body: ["ed-1812-p1", "ed-1812-p2", "ed-1812-p3", "ed-1812-p4", "ed-1812-p5", "ed-1812-p6", "ed-1812-p7"],
        back: "ed-1812-back",
        videoLabel: "ed-1812-video"
      }
    },
    {
      id: "evento-guerra-patriottica-1812",
      type: "event",
      asset: "assets/img/conferenza-guerra-patriottica-1812-milano-2026.webp",
      date: "2026-09-13",
      routes: { it: "evento-guerra-patriottica-1812-milano-2026.html" },
      keys: {
        title: "ev-1812-full-title",
        date: "ev-1812-date",
        time: "ev-1812-time",
        venue: "ev-1812-venue",
        address: "ev-1812-address",
        details: "ev-1812-details"
      }
    },
    {
      id: "galleria-emanuele-filiberto",
      type: "gallery",
      asset: "assets/1.9.jpg",
      date: "2026-06-09",
      routes: { it: "galleria.html#incontro-emanuele-filiberto-2026" },
      keys: {
        date: "ga-filiberto-date",
        title: "ga-filiberto-title",
        body: ["ga-filiberto-p1"],
        photos: "ga-filiberto-photos",
        imageAlt: ["ga-filiberto-photo-1", "ga-filiberto-photo-2", "ga-filiberto-photo-3", "ga-filiberto-photo-4", "ga-filiberto-photo-5"]
      }
    },
    {
      id: "galleria-visita-pastorale-mark",
      type: "gallery",
      asset: "assets/1.jpeg",
      date: "2026-02-20",
      routes: { it: "galleria.html#visita-pastorale-mark-2026" },
      keys: {
        date: "ga-mark-date",
        title: "ga-mark-title",
        body: ["ga-mark-p1", "ga-mark-p2", "ga-mark-p3", "ga-mark-p4", "ga-mark-p5", "ga-mark-p6", "ga-mark-p7"],
        photos: "ga-mark-photos",
        imageAlt: ["ga-mark-photo-1", "ga-mark-photo-2", "ga-mark-photo-3", "ga-mark-photo-4", "ga-mark-photo-5", "ga-mark-photo-6", "ga-mark-photo-7"]
      }
    },
    {
      id: "galleria-guerra-patriottica-1812",
      type: "gallery",
      asset: "assets/img/guerra-patriottica-1812-convegno-13-settembre-2026.webp",
      date: "2026-09-13",
      routes: { it: "galleria.html" },
      keys: {
        date: "ga-1812-data",
        title: "ga-1812-title",
        caption: "ga-1812-caption"
      }
    }
  ];
});
