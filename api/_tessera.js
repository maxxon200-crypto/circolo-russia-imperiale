/**
 * Modello della TESSERA DIGITALE del socio.
 *
 * Genera l'HTML della tessera con i dati del socio. Il modulo e usato dalla
 * funzione serverless /api/iscrizione.js, che allega la tessera alla email di
 * conferma SOLO quando INVIA_TESSERA_AUTOMATICAMENTE e true.
 *
 * Palette e tipografia coerenti col sito:
 *   blu notte #0B1F3A, testo #F2EEE4, oro brunito #B08D2E, font Manrope.
 * Il formato e adatto sia alla visualizzazione sia alla stampa (85,6 x 54 mm,
 * le proporzioni di una tessera standard).
 */

/** Etichette della tessera nelle tre lingue. */
const ETICHETTE = {
  it: {
    ente: "Circolo Internazionale Amici della Russia Imperiale",
    motto: "Terza Roma",
    socio: "Socio",
    tipo: "Categoria",
    validita: "Valida per l'anno",
    tipi: { sostenitore: "Socio sostenitore", ordinario: "Socio ordinario", junior: "Socio junior" }
  },
  ru: {
    ente: "Международная ассоциация «Друзья Российской Империи»",
    motto: "Третий Рим",
    socio: "Участник",
    tipo: "Категория",
    validita: "Действительна на год",
    tipi: { sostenitore: "Участник-благотворитель", ordinario: "Действительный участник", junior: "Юниор" }
  },
  en: {
    ente: "International Circle of Friends of Imperial Russia",
    motto: "Third Rome",
    socio: "Member",
    tipo: "Category",
    validita: "Valid for the year",
    tipi: { sostenitore: "Supporting member", ordinario: "Ordinary member", junior: "Junior member" }
  }
};

/** Evita che i dati inseriti dall'utente possano iniettare HTML. */
function esc(v) {
  return String(v == null ? "" : v)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/**
 * Costruisce l'HTML della tessera.
 * @param {object} d
 * @param {string} d.nome        Nome del socio
 * @param {string} d.cognome     Cognome del socio
 * @param {string} [d.tipo]      "sostenitore" | "ordinario" | "junior"
 * @param {number} [d.anno]      Anno di validita (default: anno corrente)
 * @param {string} [d.lingua]    "it" | "ru" | "en"
 * @param {string} [d.logoUrl]   URL assoluto del logo (opzionale)
 * @returns {string} HTML completo della tessera
 */
function tesseraHTML(d) {
  const lang = ETICHETTE[d.lingua] ? d.lingua : "it";
  const L = ETICHETTE[lang];
  const anno = d.anno || new Date().getFullYear();
  const tipo = L.tipi[d.tipo] || L.tipi.ordinario;
  const nome = esc([d.nome, d.cognome].filter(Boolean).join(" ").trim());
  const logo = d.logoUrl
    ? `<img class="logo" src="${esc(d.logoUrl)}" alt="">`
    : `<span class="logo logo--vuoto" aria-hidden="true"></span>`;

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${esc(nome)} - ${esc(L.ente)}</title>
<style>
  @page { size: 100mm 65mm; margin: 0; }
  body {
    margin: 0; padding: 18px;
    background: #F6F6F4;
    font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    display: flex; align-items: center; justify-content: center;
  }
  .tessera {
    box-sizing: border-box;
    width: 85.6mm; min-height: 54mm;
    padding: 6mm 7mm;
    background: #0B1F3A;
    color: #F2EEE4;
    border: 1px solid #B08D2E;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .testa { display: flex; align-items: center; gap: 4mm; }
  .logo { width: 12mm; height: 12mm; border-radius: 50%; border: 1px solid #B08D2E; object-fit: cover; background: #fff; }
  .logo--vuoto { display: block; }
  .ente { font-size: 7.5pt; font-weight: 600; line-height: 1.3; letter-spacing: .01em; }
  .motto {
    font-size: 6pt; font-weight: 700; letter-spacing: .28em; text-transform: uppercase;
    color: #C9A227; margin-top: 1.2mm;
  }
  .filetto { height: 1px; background: rgba(176,141,46,.45); margin: 4mm 0 3mm; }
  .nome { font-size: 13pt; font-weight: 600; line-height: 1.2; margin: 0 0 3mm; }
  .righe { display: flex; gap: 8mm; }
  .et { font-size: 5.5pt; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: #B08D2E; margin-bottom: .8mm; }
  .val { font-size: 8pt; font-weight: 500; color: #F2EEE4; }
  @media print { body { background: #fff; padding: 0; } }
</style>
</head>
<body>
  <div class="tessera">
    <div>
      <div class="testa">
        ${logo}
        <div>
          <div class="ente">${esc(L.ente)}</div>
          <div class="motto">${esc(L.motto)}</div>
        </div>
      </div>
      <div class="filetto"></div>
    </div>
    <div>
      <div class="et">${esc(L.socio)}</div>
      <p class="nome">${nome}</p>
      <div class="righe">
        <div>
          <div class="et">${esc(L.tipo)}</div>
          <div class="val">${esc(tipo)}</div>
        </div>
        <div>
          <div class="et">${esc(L.validita)}</div>
          <div class="val">${esc(anno)}</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

module.exports = { tesseraHTML, ETICHETTE };
