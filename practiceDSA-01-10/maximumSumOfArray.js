function findMaximumSumOfArray(arr, k) {
  let max_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < k + i; j++) {
      sum = sum + arr[j];
    }
    if (sum > max_sum) {
      max_sum = sum;
    }
  }
  return max_sum;
}
console.log(findMaximumSumOfArray([1, 4, 2, 10, 2, 3, 1, 0], 5));
