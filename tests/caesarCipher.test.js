const cipher = require('../functions/caesarCipher');

it('it returns a ciphered word', () => {
  expect(cipher().ceaser('abc', 1)).toMatch('bcd');
});

it('it returns a ciphered sentence', () => {
  expect(cipher().ceaser('abc def', 1)).toMatch('bcd efg');
});

it('it returns a ciphered sentence with capital letters', () => {
  expect(cipher().ceaser('Abc def', 1)).toMatch('Bcd efg');
});

it('it returns punctuations untouched', () => {
  expect(cipher().ceaser('Abc, def.', 1)).toMatch('Bcd, efg.');
});

it('it returns the module corresponding letter', () => {
  expect(cipher().ceaser('z', 1)).toMatch('a');
});

it('it returns module corresponding letter in respect the case', () => {
  expect(cipher().ceaser('Z', 1)).toMatch('A');
});

it('it returns module corresponding letter in respect the case', () => {
  expect(cipher().ceaser('Z', 1)).toMatch('A');
});

test('should code a new uppercase', () => {
  expect(cipher().ceaser('Z', 10)).toMatch('J');
});
