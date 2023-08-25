//  Check if a string is an Anagram

function anagram(str1, str2) {
  //   if (str1.length !== str2.length) {
  //     return false;
  //   }
  let found = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        found++;
      }
    }
  }
  //   return found.length === str1.length;
  console.log(found);
  console.log(str1.length);

  if (found === str1.length) {
    return true;
  } else {
    return false;
  }
}

console.log(anagram("shweta", "hwetsa"));

// function anagram1(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   for (let i = 0; i < str1.length; i++) {
//     let found = false;
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(anagram1("shweta", "hwetsa")); // Output: true
