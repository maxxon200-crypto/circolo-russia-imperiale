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
  'galleria-emanuele-filiberto': {
    date: '2026-06-09', photos: ['1.9.jpg', '2.9.jpg', '3.9.jpg', '4.9.jpg', '5.9.jpg']
  },
  'galleria-visita-pastorale-mark': {
    date: '2026-02-20', photos: ['1.jpeg', '2.jpg', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG']
  }
};
const assetNames = fs.readdirSync(path.join(root, 'assets'));
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
  assert.deepEqual(photos.map(([, attrs]) => attrs.match(/src="assets\/([^"]+)"/)[1]), event.photos);
  photos.forEach(([, attrs], index) => {
    const name = event.photos[index];
    assert.ok(assetNames.includes(name), 'Nome e maiuscole del file: ' + name);
    assert.ok(body.includes(`href="assets/${name}"`), 'Foto originale apribile: ' + name);
    assert.match(attrs, /\bwidth="[1-9]\d*"/);
    assert.match(attrs, /\bheight="[1-9]\d*"/);
    assert.match(attrs, /loading="lazy"/);
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
console.log(`Gallery audit passed: ${articles.length} entries, 12 new photographs, date-first order, 3 locales`);
