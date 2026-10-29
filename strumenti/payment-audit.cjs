const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const sandbox = {
  window: {},
  document: { readyState: 'loading', querySelectorAll() { return []; }, addEventListener() {} }
};
vm.runInNewContext(read('js/i18n.js'), sandbox);
const dictionaries = sandbox.window.CIRCOLO_TRANSLATIONS;
const keys = ['payment-title', 'payment-text', 'payment-action', 'payment-close', 'cp-payment-storage'];
const url = 'https://www.paypal.com/ncp/payment/2KEMKNKA334T6';

for (const locale of ['it', 'en', 'ru']) {
  for (const key of keys) assert.ok(dictionaries[locale][key]?.trim(), `${locale}.${key} missing`);
  assert.equal(dictionaries[locale]['payment-text'].trim().split(/\s+/).length, 20, `${locale}: expected 20 words`);
}

for (const file of ['index.html', 'tesseramento.html']) {
  const html = read(file);
  const boxes = [...html.matchAll(/<aside class="payment-box"[\s\S]*?<\/aside>/g)];
  assert.equal(boxes.length, 1, `${file}: exactly one permanent payment box`);
  const box = boxes[0][0];
  assert.ok(box.includes(dictionaries.it['payment-text']), `${file}: fallback text matches translations`);
  assert.ok(box.includes(`href="${url}" target="_blank" rel="noopener noreferrer"`), `${file}: safe PayPal link`);
  assert.doesNotMatch(box, /payment-note|aria-describedby|<iframe/i, `${file}: no removed note, stale reference or embed`);
}

const main = read('js/main.js');
assert.equal((main.match(/prompt\.className = "payment-prompt"/g) || []).length, 1, 'One shared popup implementation');
assert.ok(main.includes('if (document.querySelector(".payment-prompt")) { return; }'), 'Prevent duplicate popup instances');
assert.ok(main.includes(`href="${url}"`), 'Popup uses the approved payment link');
assert.ok(main.includes('--payment-cookie-offset'), 'Account for the cookie banner');
assert.doesNotMatch(main, /menuOpen \|\| document\.querySelector\("\.cookie-banner"\)/, 'Cookie banner must not block the popup');
for (const key of ['payment-title', 'payment-text', 'payment-action']) {
  assert.ok(main.includes(`data-i18n="${key}"`), `${key}: popup uses the shared dictionary`);
  assert.ok(!main.includes(dictionaries.it[key]), `${key}: no duplicated Italian text in JavaScript`);
}

let translatedPages = 0;
for (const file of fs.readdirSync(root).filter(file => file.endsWith('.html'))) {
  const html = read(file);
  assert.equal((html.match(/src="\/?js\/main\.js"/g) || []).length, 1, `${file}: load main.js once`);
  // The existing standalone 404 has no language switcher or translation script.
  if (file === '404.html') continue;
  assert.equal((html.match(/src="\/?js\/i18n\.js"/g) || []).length, 1, `${file}: load i18n.js once`);
  assert.ok(html.indexOf('src="js/main.js"') < html.indexOf('src="js/i18n.js"'), `${file}: translate generated popup`);
  translatedPages++;
}

console.log(`Payment audit passed: 2 permanent boxes, 1 shared popup, approved URL, 20-word text in 3 locales, ${translatedPages} translated pages`);
