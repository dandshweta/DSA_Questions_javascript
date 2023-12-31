function mergeAndSortArrays(arr1, arr2) {
  const mergedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!mergedArray.includes(arr1[i])) {
      mergedArray.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!mergedArray.includes(arr2[i])) {
      mergedArray.push(arr2[i]);
    }
  }

  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
      if (mergedArray[i] > mergedArray[j]) {
        const temp = mergedArray[i];
        mergedArray[i] = mergedArray[j];
        mergedArray[j] = temp;
      }
    }
  }

  return mergedArray;
}

console.log(
  mergeAndSortArrays([1, 2, 3, 4, 5, 2, 4, 56, 1], [1, 24, 5, 6, 7, 8])
);
