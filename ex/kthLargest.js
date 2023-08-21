// function KthElement(arr, k) {
//   let maxValues = [];

//   for (let i = 0; i < k; i++) {
//     let max = 0;
//     let maxIndex = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > max) {
//         max = arr[j];
//         maxIndex = j;
//       }
//     }
//     maxValues.push(max);
//     arr.splice(maxIndex, 1);
//   }

//   //   return maxValue;
//   return maxValues[maxValues.length - 1];
// }

// console.log(KthElement([1, 2, 3, 4], 4));

function KthElement(arr, k) {
  let maxValues = [];

  //   if (arr.length > k > 1) {
  for (let i = 0; i < k; i++) {
    let max = 0;
    let maxIndex = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
        maxIndex = j;
      }
    }
    maxValues.push(max);
    arr.splice(maxIndex, 1);
  }
  //   }
  //   else {
  // return arr[0];

  //   }
  //   return maxValue;
  return maxValues[maxValues.length - 1];
}
console.log(KthElement([1, 2, 3], 4));
