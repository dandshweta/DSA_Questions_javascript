// Write a program to Find unique Pair Of Integers in Array whose Sum is Given Number Given array : [2,
//     4, 3, 5, 6, -2, 4, 7, 8, 9]
//     Given sum : 7
//     Integer numbers, whose sum is equal to value : (2, 5) (4, 3) (-2, 9)
function uniquePair(arr) {
  let output = [];
  let newarr = [];
  for (let m = 0; m < arr.length; m++) {
    if (!newarr.includes(arr[m])) {
      newarr.push(arr[m]);
    }
  }
  //   console.log(newarr);
  for (let i = 0; i < newarr.length; i++) {
    for (let j = i + 1; j < newarr.length; j++) {
      if (newarr[i] + newarr[j] === 7) {
        console.log(newarr[i], newarr[j]);
      }
    }
  }
  //   return output;
}
uniquePair([2, 4, 3, 5, 6, -2, 4, 7, 8, 9]);
