// function flatArray(arr) {
//   let flatA = [];
//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];
//     if (!Array.isArray(current)) {
//       flatA.push(current);
//       continue;
//     }
//     for (let j = 0; j < current.length; j++) {
//       flatA.push(current[j]);
//     }
//   }
//   return flatA;
// }

function flatArray(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (!Array.isArray(cur)) {
      flat.push(cur);
    } else {
      for (let j = 0; j < cur.length; j++) {
        if (!Array.isArray(cur[j])) {
          flat.push(cur[j]);
        } else {
          for (let k = 0; j < cur[j].length; k++) {
            flat.push();
          }
          // flat.push(cur[j]);
        }
      }
    }
  }
  return flat;
}
console.log(
  flatArray([
    [1, 2, [10, 11, 12, 13, 14, 15, [10, 11, 12, 13, 14, 15]]],
    [3, 4],
    [5, 6, 7, 8, 9, [5, 6, 7, 8, 9, [5, 6, 7, 8, 9]]],
    [10, 11, 12, 13, 14, 15],
  ])
);

console.log(flatArray([1, 2, 3, 4, [1, 2], [3, 4, [3, 4]], 5]));
