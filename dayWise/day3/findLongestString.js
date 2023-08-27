// To find longest word from a string using (for of Loop) means iterate by an elements not by indexing
function findLongestString(str) {
  let words = str.split(" ");
  let maxWord = " ";

  for (let word of words) {
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }

  return maxWord;
}

console.log(findLongestString("hii I am Shweta"));
