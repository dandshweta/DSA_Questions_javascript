// To find longest word from a string using functions
function findLongestString(str) {
  let word = str.split(" ");

  let max = " ";

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > max.length) {
      max = word[i];
    }
  }
  return max;
}
console.log(findLongestString("hii I am Shweta"));
