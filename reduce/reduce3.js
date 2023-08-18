const arrayOfArrays = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8],
];
const flattenedArray = arrayOfArrays.reduce(
  (accumulator, current) => accumulator.concat(current),
  []
);
// flattenedArray will be [1, 2, 3, 4, 5, 6, 7, 8]
