function removeDuplicateChar(str) {
  let newStr = str.toLowerCase();
  let uniqueChars = "";
  //   console.log(newStr);
  for (let i = 0; i < newStr.length; i++) {
    if (!uniqueChars.includes(newStr[i])) {
      uniqueChars = uniqueChars + newStr[i];
    }
  }
  return uniqueChars;
}
console.log(removeDuplicateChar("Shrinivasshweta"));
