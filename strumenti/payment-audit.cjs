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
const keys = ['payment-title', 'payment-text', 'payment-join-action', 'payment-action', 'payment-close', 'cp-payment-storage'];
const url = 'https://www.paypal.com/ncp/payment/2KEMKNKA334T6';
const joinUrl = 'tesseramento.html#domanda-di-adesione';

for (const locale of ['it', 'en', 'ru']) {
  for (const key of keys) assert.ok(dictionaries[locale][key]?.trim(), `${locale}.${key} missing`);
}
assert.equal(dictionaries.it['payment-title'], 'Unisciti a noi');
assert.equal(dictionaries.it['payment-text'], 'Diventa socio e sostieni le attività del Circolo. Grazie per il tuo prezioso contributo!');
assert.equal(dictionaries.it['payment-join-action'], 'Iscriviti al club');
assert.equal(dictionaries.it['payment-action'], 'Fai una donazione');
assert.match(read('tesseramento.html'), /id="domanda-di-adesione"/, 'Membership action has an existing destination');

for (const file of ['index.html', 'tesseramento.html']) {
  const html = read(file);
  const boxes = [...html.matchAll(/<aside class="payment-box"[\s\S]*?<\/aside>/g)];
  assert.equal(boxes.length, 1, `${file}: exactly one permanent payment box`);
  const box = boxes[0][0];
  for (const key of ['payment-title', 'payment-text', 'payment-join-action', 'payment-action']) {
    assert.ok(box.includes(dictionaries.it[key]), `${file}: ${key} fallback matches translations`);
  }
  assert.equal((box.match(/<a\b/g) || []).length, 2, `${file}: membership and donation actions`);
  assert.ok(box.includes(`href="${joinUrl}"`), `${file}: membership links to the application`);
  assert.ok(box.includes(`href="${url}" target="_blank" rel="noopener noreferrer"`), `${file}: safe PayPal link`);
  assert.doesNotMatch(box, /payment-note|aria-describedby|<iframe/i, `${file}: no removed note, stale reference or embed`);
}

const main = read('js/main.js');
assert.equal((main.match(/prompt\.className = "payment-prompt"/g) || []).length, 1, 'One shared popup implementation');
assert.ok(main.includes('if (document.querySelector(".payment-prompt")) { return; }'), 'Prevent duplicate popup instances');
assert.ok(main.includes(`href="${url}"`), 'Popup uses the approved payment link');
assert.ok(main.includes(`href="${joinUrl}"`), 'Popup links to the membership application');
assert.ok(main.includes('20000 - (Date.now() - startedAt)'), 'Keep the existing 20-second delay');
assert.ok(main.includes('--payment-cookie-offset'), 'Account for the cookie banner');
assert.doesNotMatch(main, /menuOpen \|\| document\.querySelector\("\.cookie-banner"\)/, 'Cookie banner must not block the popup');
for (const key of ['payment-title', 'payment-text', 'payment-join-action', 'payment-action']) {
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

console.log(`Payment audit passed: 2 permanent boxes, 1 shared popup, membership and donation actions in 3 locales, ${translatedPages} translated pages`);
