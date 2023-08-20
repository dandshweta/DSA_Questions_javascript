function minNo(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let min = max;
  for (j = 0; j < arr.length; j++) {
    if (arr[j] < min) {
      min = arr[j];
    }
  }
  return min;
}
console.log(minNo([4, 5, 6, 6]));
