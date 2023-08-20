// Write a program to input an alphabet and display whether it is a vowel or a consonant.

function findVowelConsonent(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return "character is vowel";
  } else {
    return "character is consonant";
  }
}
console.log(findVowelConsonent("a"));
