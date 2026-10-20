// Regressioni editoriali della galleria, senza dipendenze esterne.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'galleria.html'), 'utf8');
const records = require(path.join(root, 'js/editorial-content.js'));
const sandbox = {
  window: {},
  document: { readyState: 'loading', querySelectorAll() { return []; }, addEventListener() {} },
  localStorage: { getItem() { return null; }, setItem() {} },
  console
};
vm.runInNewContext(fs.readFileSync(path.join(root, 'js/i18n.js'), 'utf8'), sandbox);
const translations = sandbox.window.CIRCOLO_TRANSLATIONS;
const articles = [...html.matchAll(/<article\b([^>]*)>([\s\S]*?)<\/article>/g)];
const dates = articles.map(([, attributes, body]) => {
  // La data deve precedere titolo, testo e immagini anche nell'ordine di lettura.
  assert.match(body.trim(), /^<p class="ev-arch__data(?: reveal)?"><time datetime="\d{4}-\d{2}-\d{2}"/);
  assert.doesNotMatch(attributes, /class="[^"]*\breveal\b/, 'Non animare una scheda più alta del viewport');
  return body.match(/<time datetime="([^"]+)"/)[1];
});
assert.deepEqual(dates, [...dates].sort().reverse(), 'Archivio dal più recente');
assert.equal(new Set(dates).size, dates.length, 'Nessuna scheda duplicata');

const expected = {
  'galleria-pozzolo-stramezzi': {
    date: '2026-10-18', photos: [
      'img/incontro-milano-18-ottobre-2026/6cfa9382-a6fe-4230-ab07-a01f960da18f.jpg',
      'img/incontro-milano-18-ottobre-2026/524e259e-7ba7-43bc-a338-4dd4b1bca80d.jpg',
      'img/incontro-milano-18-ottobre-2026/IMG_4816.jpg',
      'img/incontro-milano-18-ottobre-2026/8abaa46e-3756-4b59-b55c-27236e57cb37.jpg',
      'img/incontro-milano-18-ottobre-2026/28ea0034-37f7-4c09-b5f6-3ab3194d5c29.jpg',
      'img/incontro-milano-18-ottobre-2026/IMG_4819.jpg'
    ]
  },
  'galleria-maslenitsa-2025': {
    date: '2025-03-02', photos: ['img/galleria.2mar2025.jpg']
  },
  'galleria-emanuele-filiberto': {
    date: '2026-06-09', photos: ['1.9.jpg', '2.9.jpg', '3.9.jpg', '4.9.jpg', '5.9.jpg']
  },
  'galleria-visita-pastorale-mark': {
    date: '2026-02-20', photos: ['1.jpeg', '2.jpg', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG']
  }
};
function assetExistsExactly(relative) {
  let directory = path.join(root, 'assets');
  for (const part of relative.split('/')) {
    if (!fs.readdirSync(directory).includes(part)) return false;
    directory = path.join(directory, part);
  }
  return fs.statSync(directory).isFile();
}
let checkedPhotos = 0;
for (const [id, event] of Object.entries(expected)) {
  const matches = articles.filter(([, attributes]) => attributes.includes(`data-editorial-record="${id}"`));
  assert.equal(matches.length, 1, id);
  const [, attributes, body] = matches[0];
  const record = records.find(record => record.id === id);
  assert.ok(record, id + ': registro editoriale');
  assert.equal(record.date, event.date);
  assert.ok(body.includes(`datetime="${event.date}"`));
  const fragment = record.routes.it.split('#')[1];
  assert.ok(fragment && attributes.includes(`id="${fragment}"`), id + ': collegamento diretto');
  const photos = [...body.matchAll(/<img\b([^>]*)>/g)];
  checkedPhotos += photos.length;
  assert.deepEqual(photos.map(([, attrs]) => attrs.match(/src="assets\/([^"]+)"/)[1]), event.photos);
  photos.forEach(([, attrs], index) => {
    const name = event.photos[index];
    assert.ok(assetExistsExactly(name), 'Nome e maiuscole del file: ' + name);
    assert.ok(body.includes(`href="assets/${name}"`), 'Foto originale apribile: ' + name);
    assert.match(attrs, /\bwidth="[1-9]\d*"/);
    assert.match(attrs, /\bheight="[1-9]\d*"/);
    assert.match(attrs, /loading="lazy"|fetchpriority="high"/);
    assert.ok(attrs.includes(`data-i18n-attr="alt:${record.keys.imageAlt[index]}"`));
  });
  for (const [, , key, text] of body.matchAll(/<(p|h3|time|figcaption)\b[^>]*data-i18n="([^"]+)"[^>]*>([\s\S]*?)<\/\1>/g)) {
    assert.equal(text, translations.it[key], id + ': testo italiano non allineato a ' + key);
  }
  for (const key of Object.values(record.keys).flat()) {
    for (const locale of ['it', 'en', 'ru']) {
      assert.ok(translations[locale][key]?.trim(), id + ': ' + locale + '.' + key);
    }
  }
}
assert.equal([...html.matchAll(/<img\b[^>]*fetchpriority="high"/g)].length, 1, 'Una sola immagine prioritaria');
const maslenitsa = articles.find(([, attributes]) => attributes.includes('data-editorial-record="galleria-maslenitsa-2025"'))[2];
assert.match(maslenitsa, /<figcaption class="didascalia" data-i18n="ga-maslenitsa-caption">Antonio Imperatore, Lali Panchulidze e Ludmila Mitrofanova<\/figcaption>/);
assert.equal([...maslenitsa.matchAll(/data-i18n="ga-maslenitsa-p\d"/g)].length, 9, 'Resoconto completo di Maslenitsa');
assert.doesNotMatch(maslenitsa, /&#x|\\\s*<\/p>|\*Maslenitsa/);
for (const url of [
  'https://youtu.be/ukrH0Sm5uw8?feature=shared',
  'https://it.m.wikipedia.org/wiki/Maslenica',
  'https://pin.it/2jHWTRD5m',
  'https://it.m.wikipedia.org/wiki/Paolo_Troubetzkoy',
  'https://www.podkova.it/'
]) assert.ok(maslenitsa.includes(`href="${url}"`), 'Collegamento fornito: ' + url);
for (const record of records.filter(record => ['galleria-maslenitsa-2025', 'galleria-pozzolo-stramezzi'].includes(record.id))) {
  for (const key of record.keys.body) assert.doesNotMatch(translations.it[key], /\p{Script=Cyrillic}/u, 'Caratteri misti nel testo italiano: ' + key);
}
console.log(`Gallery audit passed: ${articles.length} entries, ${checkedPhotos} checked photographs, date-first order, 3 locales`);
