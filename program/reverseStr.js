// function reverseStr(str) {
//   let newstr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newstr = newstr + str[i];
//   }
//   return newstr;
// }
// console.log(reverseStr("shweta"));

function reverseStr(str) {
  let newstr = [];
  let arr = str.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    newstr.push(str[i]);
  }
  let str1 = newstr.join("").toString();
  return str1;
}
console.log(reverseStr("shweta"));
