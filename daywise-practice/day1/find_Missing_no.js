// function findMissing_No(arr) {
//   let count = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === count) {
//       count++;
//     } else {
//       return count;
//     }
//   }
//   if (count === arr[0]) {
//     return "no missing no";
//   }
// }
// console.log(findMissing_No([1, 2, 3, 4, 6, 7, 8, 9]));
// console.log(findMissing_No([2, 4, 6, 10]));
// console.log(findMissing_No([2, 3, 4, 5, 6, 7, 8, 9]));
function findMissingNo(arr) {
  let count = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === count) {
      count++;
    } else {
      return count;
    }
  }

  // If the loop completes and no missing number is found
  return "no missing no";
}

console.log(findMissingNo([1, 2, 3, 4, 6, 7, 8, 9])); // Output: 5
console.log(findMissingNo([2, 4, 6, 10])); // Output: 8
console.log(findMissingNo([2, 3, 4, 5, 6, 7, 8, 9])); // Output: 1
