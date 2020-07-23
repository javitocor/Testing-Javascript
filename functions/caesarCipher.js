const cipher = () => {
  function findCipheredEquivalent(startingPoint, key, charCode) {
    return String.fromCharCode(((charCode - startingPoint + key) % 26) + startingPoint);
  }

  function ceaser(str, key) {
    let string = '';

    for (let i = 0; i < str.length; i += 1) {
      const charCode = str[i].charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        string += findCipheredEquivalent(65, key, charCode);
      } else if (charCode >= 97 && charCode <= 122) {
        string += findCipheredEquivalent(97, key, charCode);
      } else {
        string += str[i];
      }
    }
    return string;
  }

  return {
    ceaser,
  };
};

module.exports = cipher;