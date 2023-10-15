function subArrayWithGivenSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    let startIndex = arr[i];

    for (let j = i; j < arr.length; j++) {
      currentSum = currentSum + arr[j];

      if (currentSum === sum) {
        return [startIndex, arr[j]];
      }
    }
  }

  return `not a subarray like sum is ${sum} `;
}

console.log(subArrayWithGivenSum([1, 2, 3, 7, 5], 12));
console.log(subArrayWithGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
console.log(subArrayWithGivenSum([1, 2, 3, 7, 5], 80));
