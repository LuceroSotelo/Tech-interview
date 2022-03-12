const countVowels = (str) => {

  let vocalObj = { a, e, i, o,u}
  const wordSeparate = str.split();

  for (let i = 0; i < wordSeparate.length; i++) {
    if (wordSeparate[i] == "a") {
      Object.assign(vocalObj, wordSeparate[i])
    }
    if (wordSeparate[i] == "e") {
      Object.assign(vocalObj, wordSeparate[i])
    }
    if (wordSeparate[i] == "i") {
      Object.assign(vocalObj, wordSeparate[i])
    }
    if (wordSeparate[i] == "o") {
      Object.assign(vocalObj, wordSeparate[i])
    }
    if (wordSeparate[i] == "u") {
      Object.assign(vocalObj, wordSeparate[i])
    }
  }
  return vocalObj
};

console.log(countVowels)

module.exports = countVowels;