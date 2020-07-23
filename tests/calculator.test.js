const calculator = require('../functions/calculator');

describe('add', () => {
  it('adds two numbers', () => {
    expect(calculator().add(2, 8)).toBe(10);
  });

  it('adds two floats', () => {
    expect(calculator().add(2.2, 8.28)).toBeCloseTo(10.48);
  });

  it('adds two numbers(including negative values)', () => {
    expect(calculator().add(2, -8)).toBe(-6);
  });

  it('returns NaN if no number is given', () => {
    expect(calculator().add()).toBeNaN();
  });

  it('returns NaN if at least one of the numbers is undefined', () => {
    expect(calculator().add(5, undefined)).toBeNaN();
  });

  it('returns the other number if one of them is null', () => {
    expect(calculator().add(5, null)).toBe(5);
  });

  it('returns 0 if both of the numbers are null', () => {
    expect(calculator().add(null, null)).toBe(0);
  });
});

describe('subtract', () => {
  it('subtract two numbers', () => {
    expect(calculator().subtract(8, 2)).toBe(6);
  });

  it('subtract two floats', () => {
    expect(calculator().subtract(8.6, 2.1)).toBeCloseTo(6.5);
  });

  it('subtract two floats(including negative values)', () => {
    expect(calculator().subtract(8, -2)).toBeCloseTo(10);
  });

  it('returns NaN if no number is given', () => {
    expect(calculator().subtract()).toBeNaN();
  });

  it('returns NaN if at least one of the numbers is undefined', () => {
    expect(calculator().subtract(5, undefined)).toBeNaN();
  });

  it('returns the first number if the second is null', () => {
    expect(calculator().subtract(5, null)).toBe(5);
  });

  it('returns the negated second number if is null', () => {
    expect(calculator().subtract(null, 5)).toBe(-5);
  });

  it('returns 0 if both of the numbers are null', () => {
    expect(calculator().subtract(null, null)).toBe(0);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(calculator().multiply(2, 8)).toBe(16);
  });

  it('multiplies two floats', () => {
    expect(calculator().multiply(2, 8.5)).toBeCloseTo(17);
  });

  it('multiplies two numbers(including negative values)', () => {
    expect(calculator().multiply(2, -8)).toBe(-16);
  });

  it('returns NaN if no number is given', () => {
    expect(calculator().multiply()).toBeNaN();
  });

  it('returns NaN if at least one of the numbers is undefined', () => {
    expect(calculator().multiply(5, undefined)).toBeNaN();
  });

  it('returns 0 if one of them is null', () => {
    expect(calculator().multiply(5, null)).toBe(0);
  });

  it('returns 0 if both of the numbers are null', () => {
    expect(calculator().multiply(null, null)).toBe(0);
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    expect(calculator().divide(8, 2)).toBe(4);
  });

  it('divides two floats', () => {
    expect(calculator().divide(10, 2.5)).toBeCloseTo(4);
  });

  it('divides two numbers(including negative values)', () => {
    expect(calculator().divide(16, -8)).toBe(-2);
  });

  it('returns NaN if no number is given', () => {
    expect(calculator().divide()).toBeNaN();
  });

  it('returns NaN if at least one of the numbers is undefined', () => {
    expect(calculator().divide(5, undefined)).toBeNaN();
  });

  it('returns 0 if the first number is null', () => {
    expect(calculator().divide(null, 15)).toBe(0);
  });

  it('returns infinity if the second number is null', () => {
    expect(calculator().divide(15, null)).toEqual(Infinity);
  });

  it('returns NaN if both of the numbers are null', () => {
    expect(calculator().divide(null, null)).toBeNaN();
  });
});
