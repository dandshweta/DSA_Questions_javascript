// // Write a program to compare two strings lexicographically.
// function compairTwoString(str1, str2) {
//   let newstr1 = str1.toLowerCase();
//   let newstr2 = str2.toLowerCase();

//   for (let i = 0; i < newstr1.length; i++) {
//     for (let j = i; j < newstr2.length; j++) {
//       if (newstr1[i] === newstr2[j]) {
//         console.log(newstr1[i]);
//         continue;
//       } else if (newstr1[i] !== newstr2[j]) {
//         if (newstr1[i] > newstr2[j]) {
//           return "str2 first";
//         } else if (newstr1[i] < newstr2[j]) {
//           return "str1 first";
//         }
//       }
//     }
//   }
//   return "same";
// }
// console.log(compairTwoString("shweta", "shweta"));

let str1 = "Gee";
let str2 = "GFG";

let ans = str1 < str2 ? -1 : str1 > str2 ? 1 : 0;
let res = "";

if (ans == -1) {
  res = '"' + str1 + '" comes before "' + str2 + '"';
} else if (ans === 0) {
  res = "Both string are same";
} else {
  res = '"' + str1 + '" comes after "' + str2 + '"';
}

console.log(res);
