function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  return reverseStr;
}
console.log(reverseString("shweta"));

//inbuilt method
function reverseString1(str) {
  let reverseStr1 = str.split("").reverse().join("");
  return reverseStr1;
}
console.log(reverseString1("shweta"));
