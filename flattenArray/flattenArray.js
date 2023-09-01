function flatArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let indexValue = arr[i];
    for (let j = 0; j < indexValue.length; j++) {
      newArray.push(indexValue[j]);
    }
  }
  return newArray;
}
console.log(
  flatArray([
    [1, 2],
    [3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15],
  ])
);
console.log(
  flatArray([
    [1, 2, [10, 11, 12, 13, 14, 15, [10, 11, 12, 13, 14, 15]]],
    [3, 4],
    [5, 6, 7, 8, 9, [5, 6, 7, 8, 9, [5, 6, 7, 8, 9]]],
    [10, 11, 12, 13, 14, 15],
  ])
);
