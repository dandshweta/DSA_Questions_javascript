function diff(arr) {
  //   let max = arr[0];
  let max = Number.MIN_SAFE_INTEGER;
  //   let min=max;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
  //   return max;
}
console.log(diff([1, 4, 5, 6, 7, 3, 1]));
