function smallestNo(arr) {
  let max = arr[0];
  let smallestNo;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[0];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < max) {
      smallestNo = arr[j];
      max = smallestNo;
    }
  }
  return smallestNo;
}
console.log(smallestNo([3, 4, 5, 6, 7, 5, 9, 2, 5]));
