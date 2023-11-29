function vowels(str) {
  let vowel = "";
  let newStr = str.toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    if (
      newStr[i] === "a" ||
      newStr[i] === "e" ||
      newStr[i] === "i" ||
      newStr[i] === "o" ||
      newStr[i] === "u"
    ) {
      vowel += newStr[i];
    }
  }
  return vowel;
}
console.log(vowels("qwertasdfgiomns"));
