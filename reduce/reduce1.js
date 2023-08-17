const arr = [1, 2, 3, 4, 5, 6, 7, 7];

/**
 * 0 + 1 -> 1
 * 1 + 2 -> 3
 * 3 + 3 -> 6
 * 6 + 4 -> 10
 * 10 + 5 -> 15
 * 15 + 6 -> 21
 * 21 + 7 -> 28
 * 28 + 7 -> 35
 */

// Old way
let sum = 0;
for (let item of arr) {
  sum += item;
}

console.log({ sum });

// New way
const result = arr.reduce((previousVal, currentVal, index, arrElem) => {
  previousVal += currentVal; // 0+1 -> 1
  return previousVal;
}, 0);

const result2 = arr.reduce((previousVal, currentVal, index, arrElem) => {
  previousVal += currentVal; // 0+1 -> 1
  return previousVal;
});

const result3 = arr.reduce(
  (previousVal, currentVal, index, arrElem) => (previousVal += currentVal)
);

console.log({ result });
