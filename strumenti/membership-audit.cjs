const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const html = read('tesseramento.html');
const form = html.match(/<form\b[^>]*id="form-iscrizione"[\s\S]*?<\/form>/)[0];
const fields = ['nome', 'cognome', 'email', 'telefono', 'titoli', 'data_nascita', 'luogo_nascita', 'residenza', 'indirizzo', 'cittadinanza', 'titolo_studio', 'professione', 'messaggio'];
for (const name of [...fields, 'privacy']) {
  const tags = [...form.matchAll(new RegExp('<(?:input|textarea)\\b[^>]*name="' + name + '"[^>]*>', 'g'))];
  assert.equal(tags.length, 1, `${name}: one field`);
  assert.equal(/\brequired\b/.test(tags[0][0]), name !== 'titoli', `${name}: correct required status`);
}
assert.ok(/<form[^>]*method="post"/.test(form), 'No personal data in query strings');
assert.ok(/<button[^>]*type="submit"[^>]*disabled/.test(form), 'Safe until the JavaScript handler is ready');
assert.ok(form.includes('<noscript>'), 'No-JS fallback provided');
assert.doesNotMatch(html, /te-pdf|modulo-iscrizione|Scarica il modulo/i);
assert.doesNotMatch(html, /te-box2|href="#pagamenti"/, 'No redundant contact box or payment shortcut');
assert.equal(fs.existsSync(path.join(root, 'assets/doc/modulo-iscrizione-2026.pdf')), false);
const contactPhone = read('contatti.html').match(/<input\b[^>]*name="telefono"[^>]*>/)[0];
assert.doesNotMatch(contactPhone, /\brequired\b/, 'Contact phone remains optional');
const sandbox = { window: {}, document: { readyState: 'loading', addEventListener() {}, querySelectorAll() { return []; } } };
vm.runInNewContext(read('js/i18n.js'), sandbox);
const dictionaries = sandbox.window.CIRCOLO_TRANSLATIONS;
for (const lang of ['it', 'en', 'ru']) {
  for (const [key, value] of Object.entries(dictionaries[lang]).filter(([key]) => /^(?:pp-|cp-|legal-)/.test(key))) {
    assert.doesNotMatch(value, /\[[^\]]+\]/, `${lang}.${key}: no legal placeholders`);
  }
}
const keys = new Set([...html.matchAll(/data-i18n(?:-ph)?="([^"]+)"/g)].map(m => m[1]));
for (const key of ['err-telefono', 'err-nascita', 'gr-text', 'gr-pagamento', 'pp-adesione']) keys.add(key);
for (const lang of ['it', 'en', 'ru']) for (const key of keys) {
  assert.ok(dictionaries[lang][key]?.trim(), `${lang}.${key}: missing translation`);
}
for (const key of ['te-step1', 'te-step2', 'te-step3']) {
  assert.ok(html.includes(dictionaries.it[key]), `${key}: static fallback matches the dictionary`);
}
const main = read('js/moduli.js');
for (const name of fields) assert.ok(main.includes(`v("${name}")`), `${name}: forwarded by the existing email handler`);
assert.ok(read('grazie.html').includes('tesseramento.html#pagamenti'));
assert.doesNotMatch(read('llms.txt'), /scaricare il modulo/i);
console.log('Membership audit passed: 13 fields, required status, 3 locales, no PDF, payload coverage, POST and no-JS fallback');
