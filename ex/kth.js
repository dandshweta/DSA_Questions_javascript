function KthElement(arr, k) {
  let maxValues = [];

  for (let i = 0; i < k; i++) {
    let max = arr[0];
    let maxIndex = 0;

    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
        maxIndex = j;
      }
    }

    maxValues.push(max);
    arr.splice(maxIndex, 1);
  }

  return maxValues;
}

console.log(KthElement([1, 2, 3, 4, 4, 5, 6], 4));
