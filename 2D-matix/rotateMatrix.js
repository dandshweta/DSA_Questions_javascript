function rotateMatrix(arr) {
  let arr1 = arr[0];
  let arr2 = arr[1];
  let newArray1 = [];
  let newArray2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[0]) {
      newArray1.push(arr1[i]);
    }
    if (arr2[1]) {
      newArray2.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[0]) {
      newArray1.push(arr2[i]);
    }
    if (arr2[1]) {
      newArray2.push(arr2[i]);
    }
  }
}
