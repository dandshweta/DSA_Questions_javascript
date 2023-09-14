function add(arr, target) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] === target) {
        // return { i, j };
        return [i, j];
      }
  }
  return "not no. available";
}
console.log(add([2, 4, 6, 8, 14, 3, 3], 6));

//second way
function findPairsWithSum(arr, target) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        // pairs.push([arr[i], arr[j]]);
        pairs.push([i, j]);
      }
    }
  }

  if (pairs.length > 0) {
    return pairs;
  } else {
    return "No pairs available";
  }
}

console.log(findPairsWithSum([2, 4, 6, 8, 14, 3, 3], 6));
