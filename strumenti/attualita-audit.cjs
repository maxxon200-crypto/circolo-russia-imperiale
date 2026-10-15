// Verifica abbinamenti editoriali e collegamenti condivisi, senza dipendenze.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const channel = 'https://www.youtube.com/@AMICIDELLARUSSIAIMPERIALE';
const video = 'https://youtu.be/liAKFQquTzs?si=Kvw1wT0D-skkjpet';
const source = 'https://www.ricognizioni.it/una-russofobia-che-viene-da-lontano/';
const word = 'assets/Mosca%20terza%20Roma.docx';
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const sandbox = {
  window: {}, document: { readyState: 'loading', querySelectorAll() { return []; }, addEventListener() {} },
  localStorage: { getItem() { return null; }, setItem() {} }, console
};
vm.runInNewContext(read('js/i18n.js'), sandbox);
const translations = sandbox.window.CIRCOLO_TRANSLATIONS;
let footers = 0;
for (const file of fs.readdirSync(root).filter(file => file.endsWith('.html'))) {
  const footer = read(file).match(/<footer\b[\s\S]*?<\/footer>/)?.[0];
  if (!footer) continue;
  footers++;
  const links = [...footer.matchAll(/<a\b[^>]*data-i18n="foot-youtube"[^>]*>/g)];
  assert.equal(links.length, 1, file + ': un solo canale YouTube nel footer');
  assert.ok(links[0][0].includes(`href="${channel}"`), file + ': indirizzo del canale');
  assert.match(links[0][0], /rel="[^"]*noopener/);
}
assert.ok(footers > 0, 'Nessun footer verificato');
const listing = read('attualita.html');
const cards = [...listing.matchAll(/<article\b[^>]*data-editorial-record="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)];
const russofobia = cards.find(([, id]) => id === 'una-russofobia-che-viene-da-lontano')?.[2];
const moscow = cards.find(([, id]) => id === 'mosca-terza-roma')?.[2];
assert.ok(russofobia && moscow, 'Entrambe le nuove schede devono essere presenti');
assert.ok(russofobia.includes('src="assets/img/una-russofobia-che-viene-da-lontano.jpg"'));
assert.equal(russofobia.split(`href="${source}"`).length - 1, 2, 'Immagine e azione aprono la stessa fonte');
assert.ok(russofobia.includes('datetime="2022-03-15"'), 'Data della fonte, non data di caricamento');
assert.ok(moscow.includes('src="assets/Mosca%20terza%20Roma%20(1).jpg"'));
assert.equal(moscow.split(`href="${word}"`).length - 1, 2, 'Immagine e azione aprono il Word originale');
assert.equal(moscow.split('download="Mosca terza Roma.docx"').length - 1, 2);
const document = fs.readFileSync(path.join(root, decodeURIComponent(word)));
assert.equal(document.subarray(0, 2).toString(), 'PK', 'Il documento deve essere un DOCX, non una pagina HTML');
assert.ok(fs.existsSync(path.join(root, 'assets/img/una-russofobia-che-viene-da-lontano.jpg')));
const pagesWithVideo = ['attualita.html', 'galleria.html', 'articolo-guerra-patriottica-1812.html', 'article-patriotic-war-1812.html', 'article-otechestvennaya-voina-1812.html'];
for (const file of pagesWithVideo) {
  assert.equal(read(file).split(`href="${video}"`).length - 1, 1, file + ': video del convegno');
  assert.ok(read(file).includes('data-i18n="ed-1812-video"'));
}
for (const locale of ['it', 'en', 'ru']) {
  for (const key of ['foot-youtube', 'ed-1812-video', 'at-terzaroma-read']) {
    assert.ok(translations[locale][key]?.trim(), locale + '.' + key);
  }
  const downloadLabel = translations[locale]['at-terzaroma-read'];
  assert.match(downloadLabel, /italiano|Italian|итальянском/, 'Il Word originale resta in italiano');
}
console.log(`News audit passed: 2 image/link pairs, original Word, ${footers} YouTube footers, 5 video links, 3 locales`);
