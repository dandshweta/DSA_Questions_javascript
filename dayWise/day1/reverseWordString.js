// String reverse without reversing of individual words (Array of elements can be reverse with reverse()
//  method but for string it is won't possible so required to split and then join.

function reverseString(str) {
  let words = str.split(" ");
  let reverseWords = words.reverse();
  let reverseWordString = reverseWords.join(" ");
  return reverseWordString;
}
console.log(reverseString("hello world"));
