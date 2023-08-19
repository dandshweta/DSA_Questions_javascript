const input = 6;
const array = new Array(input).fill(null);
// console.log(array);
const arr = array.map((currentvalue, index) => {
  //   console.log(index);
  return index + 1;
});
// console.log(arr);
const reduce1 = arr.reduce((prev, current) => {
  console.log(prev);
  return prev * current;
}, 0);
console.log(reduce1);
