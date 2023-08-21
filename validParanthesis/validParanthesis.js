function validParanthesis(str) {
  let arr = str.split("");
  //   console.log(arr);
  let arr1 = [];
  let arr2 = [];
  let reverseArr2 = [];
  if (arr % 2 === 1) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "[" || arr[i] === "{" || arr[i] === "(") {
      arr1.push(arr[i]);
    } else if (arr[i] === "]" || arr[i] === "}" || arr[i] === ")") {
      arr2.push(arr[i]);
    }
  }
  //   if (arr1.length !== arr2.length) {
  //     return false;
  //   }

  //   console.log(arr2);
  for (let j = arr2.length - 1; j >= 0; j--) {
    reverseArr2.push(arr2[j]);
    // console.log(reverseArr2);
  }

  //   console.log(reverseArr2);

  for (let m = 0; m < arr1.length; m++) {
    for (let n = 0; n < reverseArr2.length; n++) {
      if (arr1[m] !== reverseArr2[n]) {
        return false;
      }
    }
  }
  return true;
}
console.log(validParanthesis("[[[{[]}]]]"));
