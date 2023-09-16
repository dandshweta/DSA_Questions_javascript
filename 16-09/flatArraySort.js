function flatArrayAndSort(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let smallArr = arr[i];
      for (let j = 0; j < smallArr.length; j++) {
        newArr.push(smallArr[j]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }

  for (k = 0; k < newArr.length; k++) {
    for (m = k + 1; m < newArr.length; m++) {
      if (newArr[m] < newArr[k]) {
        let temp = newArr[k];
        newArr[k] = newArr[m];
        newArr[m] = temp;
      }
    }
  }
  return newArr;
}
console.log(flatArrayAndSort([[1, 2, 3], [4, 5, 6], [7, 8, 9], 5, 6]));
