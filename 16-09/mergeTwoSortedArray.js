function mergeTwoSortedArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
}
mergeTwoSortedArray([1, 2, 3, 4, 5, 2, 4, 56, 1], [1, 24, 5, 6, 7, 8]);
