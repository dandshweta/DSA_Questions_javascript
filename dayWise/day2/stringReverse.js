// String reverse with reversing of individual words

function reverseString(str) {
  let nStr = str.split(" ");

  let output = "";
  for (let i = 0; i < nStr.length; i++) {
    let word = nStr[i];
    let wordReverse = "";
    for (let j = word.length - 1; j >= 0; j--) {
      wordReverse = wordReverse + word[j];
    }

    output = output + wordReverse + " ";
  }

  return output;
}
console.log(reverseString(" hii shweta"));
