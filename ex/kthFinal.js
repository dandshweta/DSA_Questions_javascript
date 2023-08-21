function KthElement(arr, k) {
  let maxValues = [];

  for (let i = 0; i < k; i++) {
    let max = arr[0];
    let maxIndex = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > max && !maxValues.includes(arr[j])) {
        max = arr[j];
        maxIndex = j;
      }
    }
    maxValues.push(max);
    arr.splice(maxIndex, 1);
  }
  //   return maxValues;
  return maxValues[maxValues.length - 1];
}
console.log(KthElement([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
