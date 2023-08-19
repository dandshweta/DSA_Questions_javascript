function KthElement(arr, k) {
  let max = 0;
  let maxValue = [];
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    maxValue.push(max);
  }
  return maxValue;
}
console.log(KthElement([1, 2, 3, 4, 5, 6], 4));
