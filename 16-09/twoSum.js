function findIndex(arr, target) {
  let index = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        index.push({ i, j });
      }
    }
  }
  if (index.length === 0) {
    return "not number available";
  } else {
    return index;
  }
}
console.log(findIndex([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4], 6));
