const capitalize = require('../functions/capitalize');


test('should capitalize a word', () => {
  expect(capitalize('house')).toMatch('House');
});

test('should do nothing with a capitalize a word', () => {
  expect(capitalize('House')).toMatch('House');
});

test('should capitalize a sentence', () => {
  expect(capitalize('hello world')).toMatch('Hello world');
});

test('should do nothing if strings begins with number', () => {
  expect(capitalize('1hello world')).toMatch('1hello world');
});