function findOccurance(str) {
  const obj = {};
  const newReverseArr = [];
  const arr = str.split("");
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  //   return obj;
  const newArr = Object.keys(obj);
  //   return newArr;
  for (let j = newArr.length - 1; j >= 0; j--) {
    newReverseArr.push(newArr[j]);
  }

  //   return newReverseArr;
  for (let m = 0; m < newReverseArr.length; m++) {
    for (let n = 0; n < arr.length; n++) {
      if (newReverseArr[m] === arr[n]) {
        finalArr.push(arr[n]);
      }
    }
  }
  return finalArr.toString();
}

console.log(findOccurance("cCaaAAbbbBBB"));
