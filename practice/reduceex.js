const arr = [1, 2, 3, 4, 5, 6, 7];
const reduce1 = arr.reduce((accumulator, currentValue) => {
  return (accumulator = accumulator + currentValue);
});
console.log(reduce1);
const arr1 = [1, 2];
const reduce2 = arr1.reduce((accumulator, currentValue) => {
  return (accumulator = accumulator - currentValue);
});
console.log(reduce2);
const arr2 = [1, 2];
const reduce3 = arr2.reduce((accumulator, currentValue) => {
  return (accumulator = accumulator * currentValue);
});
console.log(reduce3);
const arr3 = [1, 2];
const reduce4 = arr3.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  return (accumulator = accumulator / currentValue);
});
console.log(reduce4);
