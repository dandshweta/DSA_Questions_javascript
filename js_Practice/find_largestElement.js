function findLargestElement(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findLargestElement([1, 3, 4, 5, 6, 79, 24, 500, 2, 4]));
