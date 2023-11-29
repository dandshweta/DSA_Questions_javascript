function whiteSpacesRemove(str) {
  let result = str.replace(/\s/g, "");
  return result;
}
console.log(whiteSpacesRemove("I am     Shweta"));
