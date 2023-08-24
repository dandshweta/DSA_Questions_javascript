// Write a program to get the character at the given index within theString.
function findIndex(str, p) {
  if (p >= 0 && p < str.length) {
    return str[p];
  } else {
    return "index is not available";
  }
}
console.log(findIndex("shweta", 4));
