const reverseString = require('../functions/reverseString');

it('return a reversed string', () => {
  expect(reverseString('abc')).toMatch('cba');
});

it('return a reversed string uppercase', () => {
  expect(reverseString('HOUSE')).toMatch('ESUOH');
});

it('return a reversed string of numbers', () => {
  expect(reverseString('1234')).toMatch('4321');
});

it('return a reversed string of lowercase and uppercase characters', () => {
  expect(reverseString('HeLlO')).toMatch('OlLeH');
});

it('return a reversed sentence', () => {
  expect(reverseString('we are here')).toMatch('ereh era ew');
});