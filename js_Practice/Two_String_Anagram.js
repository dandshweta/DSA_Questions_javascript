// function Anagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let found = 0;
//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j]) {
//         found++;
//       }
//     }
//   }
//   if (found === str1.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(Anagram("shwetas", "whetasp"));
function Anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    let found = false;

    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        found = true;
        str2 = str2.slice(0, j) + str2.slice(j + 1);
        break;
      }
    }

    if (!found) {
      return false;
    }
  }

  return true;
}

console.log(Anagram("shwetas", "whetasp"));
