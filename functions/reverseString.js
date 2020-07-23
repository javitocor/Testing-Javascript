function reverseString(str) {
  const string = str.split('').reverse().join('');
  return string;
}

module.exports = reverseString;