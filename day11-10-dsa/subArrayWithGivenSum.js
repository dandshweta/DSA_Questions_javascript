// function subArrayWithGivenSum(arr, sum) {
//   //   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;

//     for (j = i + 1; j < arr.length; j++) {
//       if (count < sum) {
//         // console.log(sum);
//         count = count + arr[j];
//       } else if (count === sum) {
//         break;
//       }
//     }

//     return count === sum;
//   }
// }
// console.log(subArrayWithGivenSum([1, 2, 3, 7, 5], 12));
// console.log(subArrayWithGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));

// function subArrayWithGivenSum(arr, sum) {
//     for (let i = 0; i < arr.length; i++) {
//       let count = arr[i];

//       for (let j = i + 1; j < arr.length; j++) {
//         if (count < sum) {
//           count = count + arr[j];
//         } else if (count === sum) {
//           return true;
//         }
//       }
//     }

//     return false;
//   }

//   console.log(subArrayWithGivenSum([1, 2, 3, 7, 5], 12));
//   console.log(subArrayWithGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));

function subArrayWithGivenSum(arr, sum) {
  for (let i = 1; i <= arr.length; i++) {
    let currentSum = arr[i];
    let startIndex = i;

    for (let j = i + 1; j <= arr.length; j++) {
      currentSum = currentSum + arr[j];
      if (currentSum === sum) {
        return [startIndex, j + 1];
      }
    }
  }

  return null;
}

console.log(subArrayWithGivenSum([1, 2, 3, 7, 5], 12));
console.log(subArrayWithGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
