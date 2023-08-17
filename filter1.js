const arr = [1, 2, 4, 5, 6, 7, 8, 9];

const filter1 = arr.filter((item) => {
  if (item % 3 === 0 || item % 5 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filter1);
