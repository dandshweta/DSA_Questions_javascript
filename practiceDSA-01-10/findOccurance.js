function findOccurance(str) {
  const commonChar = [];
  const newReverseArr = [];
  const arr = str.split("");
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (commonChar[arr[i]]) {
      commonChar[arr[i]]++;
    } else {
      commonChar[arr[i]] = 1;
    }
  }

  for (let j = commonChar.length - 1; j >= 0; j--) {
    newReverseArr.push(commonChar[j]);
  }

  for (let m = 0; m < newReverseArr.length; m++) {
    for (let n = 0; n < arr.length; n++) {
      if (newReverseArr[m] === arr[n]) {
        finalArr.push(arr[n]);
      }
    }
  }

  return finalArr;
}

console.log(findOccurance("cCaaAAbbbBBB"));
