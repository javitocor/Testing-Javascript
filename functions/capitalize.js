function capitalize(str) {
  let string = str.replace(str[0], str[0].toUpperCase());
  return string;
}

module.exports = capitalize;