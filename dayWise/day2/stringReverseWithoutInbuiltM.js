// String reverse without using inbult function
function reverseString1(str) {
  let reverse = [];
  str.split("");
  for (let i = str.length - 1; i >= 0; i--) {
    reverse.push(str[i]);
  }
  return reverse;
}
console.log(reverseString1("shweta"));

function reverseString2(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
}
console.log(reverseString2("shweta"));
