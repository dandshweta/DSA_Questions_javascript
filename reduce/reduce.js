const arr = [1, 2, 3, 4, 5, 6, 7];
const reduce1 = arr.reduce((accumulator, currentValue) => {
  return (accumulator = accumulator + currentValue);
}, 0);
console.log(reduce1);
