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
        back: "ed-1812-back"
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
