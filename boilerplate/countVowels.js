const countVowels = (str) => {

  let vowelCounterObj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'a') vowelCounterObj.a += 1;
    if (str[i].toLowerCase() === 'e') vowelCounterObj.e += 1;
    if (str[i].toLowerCase() === 'i') vowelCounterObj.i += 1;
    if (str[i].toLowerCase() === 'o') vowelCounterObj.o += 1;
    if (str[i].toLowerCase() === 'u') vowelCounterObj.u += 1;
  };

  return vowelCounterObj
};

module.exports = countVowels;
