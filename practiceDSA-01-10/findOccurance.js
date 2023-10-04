function findOccurance(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < i + K < arr.length; j++) {
      {
        if (i == j) {
          j++;
        }
        if (arr[i] === arr[j]) {
          occuranceArr.push(arr[j]);
          k++;
        }
      }
      let max = occurance.length;
      if (occurance > max) {
        newArr.push(occuranceArr);
      }
    }
  }
}
console.log(findOccurance("cCaaAAbbbBBB"));
