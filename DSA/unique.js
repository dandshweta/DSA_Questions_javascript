// Algorithm:
// step1: first take 1 variable for storing union number array.
// step2: for first input array use forloop and check number is available
//        on the union array or not then push.
// step3: then for second input array use forloop and check number is available
//     on the union array or not then push.

function unionValue(inputA, inputB) {
  let unionArr = [];
  for (let i = 0; i < inputA.length; i++) {
    if (!unionArr.includes(inputA[i])) {
      unionArr.push(inputA[i]);
    }
  }
  for (let i = 0; i < inputB.length; i++) {
    if (!unionArr.includes(inputB[i])) {
      unionArr.push(inputB[i]);
    }
  }
  return unionArr;
}
console.log(unionValue([1, 2, 3, 4, 5, 1], [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8]));

// output:  [ 1, 2, 3, 4, 5, 7, 6, 8]
