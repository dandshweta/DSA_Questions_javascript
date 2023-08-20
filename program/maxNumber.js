// Write a program to display maximum among three numbers
function maxNo(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxNo([1, 4, 5, 6, 78, 9, 3, 4, 5]));
