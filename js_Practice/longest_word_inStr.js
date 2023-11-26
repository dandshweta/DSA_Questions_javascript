function longestWord(str) {
  let words = str.split(" ");
  let largest = "";
  for (let i = 0; i < words.length; i++) {
    let p = words[i];

    if (largest.length < p.length) {
      largest = p;
    }
  }
  return largest;
}
console.log(longestWord("i am shweta asdfghh"));
