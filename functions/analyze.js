function analyze(array) {
  // eslint-disable-next-line prefer-destructuring
  const length = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const average = array.reduce((total, sum) => total + sum, 0) / length;

  return {
    length,
    min,
    max,
    average,
  };
}

module.exports = analyze;