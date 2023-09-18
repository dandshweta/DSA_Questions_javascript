function mergeAndSortArrays(list1, list2) {
  const mergedArray = [];
  for (let i = 0; i < list1.length; i++) {
    mergedArray.push(list1[i]);
  }
  for (let i = 0; i < list2.length; i++) {
    mergedArray.push(list2[i]);
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
