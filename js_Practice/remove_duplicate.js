function remove_duplicate(arr) {
  let without_duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!without_duplicate.includes(arr[i])) {
      without_duplicate.push(arr[i]);
    }
  }
  return without_duplicate;
}
console.log(remove_duplicate([1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 5, 7, 2]));

//inbuilt method

function removeDuplicate(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicate([1, 2, 3, 4, 5, 5, 5, 5, 2]));
