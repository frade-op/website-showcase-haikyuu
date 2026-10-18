// Execute com: node --test tests
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

// cast-data.js declara constantes globais; avaliamos e lemos o resultado
const CAST_SCHOOLS = vm.runInNewContext(`${read('assets/js/cast-data.js')}; CAST_SCHOOLS`);
const entries = CAST_SCHOOLS.flatMap(school => [school, ...school.chars]);

test('ids do elenco são únicos', () => {
  const ids = entries.map(entry => entry.id);
  assert.strictEqual(new Set(ids).size, ids.length);
});

test('todo item tem textos em PT e EN', () => {
  entries.forEach(entry => {
    ['role', 'text'].forEach(field => {
      assert.ok(entry[field].pt && entry[field].en, `${entry.id}.${field}`);
    });
  });
});

test('toda escola tem personagens e todo personagem tem imagem existente', () => {
  CAST_SCHOOLS.forEach(school => {
    assert.ok(school.chars.length > 0, school.id);
    school.chars.forEach(char => {
      assert.ok(fs.existsSync(path.join(root, char.img)), `${char.id}: ${char.img}`);
    });
  });
});

test('cada imagem é usada por um único personagem', () => {
  const images = CAST_SCHOOLS.flatMap(school => school.chars.map(char => char.img));
  assert.strictEqual(new Set(images).size, images.length);
});

test('scripts carregam na ordem esperada (dados e cast antes de i18n)', () => {
  const html = read('index.html');
  const order = [...html.matchAll(/<script src="assets\/js\/([\w-]+)\.js">/g)].map(match => match[1]);
  assert.ok(order.indexOf('cast-data') < order.indexOf('cast'));
  assert.ok(order.indexOf('cast') < order.indexOf('i18n'));
});

test('menu aponta para seções existentes, na ordem da página', () => {
  const html = read('index.html');
  const links = [...html.matchAll(/data-section="(\w+)"/g)].map(match => match[1]);
  assert.deepStrictEqual(links, ['about', 'cast', 'clip', 'manga']);

  const sections = [...html.matchAll(/<section class="\w+" id="(\w+)"/g)].map(match => match[1]);
  assert.deepStrictEqual(sections, links);
});

test('chaves de tradução do menu existem em inglês', () => {
  const i18n = read('assets/js/i18n.js');
  ['menu.aria', 'menu.toggle', 'menu.about', 'menu.cast', 'menu.clip', 'menu.manga'].forEach(key => {
    assert.ok(i18n.includes(`'${key}'`), key);
  });
});
