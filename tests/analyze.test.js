const analyze = require('../functions/analyze');

it('it returns an object with an average value', () => {
  expect(analyze([1, 2, 3])).toMatchObject({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test('should have properties', () => {
  expect(analyze([5, 0, 0, 0, 0])).toHaveProperty('average', 1);
  expect(analyze([5, 0, 0, 0, 0])).toHaveProperty('length', 5);
  expect(analyze([5, 0, 0, 0, 0])).toHaveProperty('min', 0);
  expect(analyze([5, 0, 0, 0, 0])).toHaveProperty('max', 5);
  expect(analyze([5, 0, 0, 0, 0])).not.toHaveProperty('whatever');
});