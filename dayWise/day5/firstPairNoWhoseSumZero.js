// To find a first pair from a number array whose sum is zero
function firstPair(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return "no pair matching";
}
console.log(firstPair([2, 3, 4, -5, -4]));
