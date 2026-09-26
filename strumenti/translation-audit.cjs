const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const editorial = require(path.join(root, 'js', 'editorial-content.js'));
const i18nSource = fs.readFileSync(path.join(root, 'js', 'i18n.js'), 'utf8');
const document = {
  readyState: 'loading',
  querySelectorAll() { return []; },
  addEventListener() {}
};
const sandbox = {
  window: {},
  document,
  localStorage: { getItem() { return null; }, setItem() {} },
  console
};
vm.runInNewContext(i18nSource, sandbox, { filename: 'js/i18n.js' });
const translations = sandbox.window.CIRCOLO_TRANSLATIONS;
const locales = ['it', 'en', 'ru'];
const errors = [];

function keysFor(record) {
  const keys = [];
  Object.keys(record.keys || {}).forEach((name) => {
    const value = record.keys[name];
    if (Array.isArray(value)) keys.push(...value);
    else if (typeof value === 'string') keys.push(value);
  });
  return keys;
}

for (const record of editorial) {
  for (const key of keysFor(record)) {
    for (const locale of locales) {
      const value = translations[locale] && translations[locale][key];
      if (typeof value !== 'string' || !value.trim()) {
        errors.push(`${record.id}: missing ${locale}.${key}`);
      } else if (/\[English version coming soon\]|\[PHOTO:|\[Titolo|\[Summary/i.test(value)) {
        errors.push(`${record.id}: placeholder in ${locale}.${key}`);
      }
    }
  }
  if (record.type === 'article') {
    for (const locale of locales) {
      if (!record.routes || !record.routes[locale]) errors.push(`${record.id}: missing route for ${locale}`);
    }
  }
}

if (errors.length) {
  console.error(`Translation audit failed (${errors.length} issue${errors.length === 1 ? '' : 's'})`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Translation audit passed: ${editorial.length} editorial records, ${locales.length} locales`);
