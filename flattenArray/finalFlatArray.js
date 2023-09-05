function flatArray(arr) {
  let result = [];

  function nestedFlatA(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        nestedFlatA(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }

  nestedFlatA(arr);
  return result;
}

console.log(flatArray([1, [2, [3, 4], 5]]));
console.log(
  flatArray([
    [1, 2, [10, 11, 12, 13, 14, 15, [10, 11, 12, 13, 14, 15]]],
    [3, 4],
    [5, 6, 7, 8, 9, [5, 6, 7, 8, 9, [5, 6, 7, 8, 9]]],
    [10, 11, 12, 13, 14, 15],
  ])
);
