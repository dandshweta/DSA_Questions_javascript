function countSay(n) {
  let prevStr = "1";

  for (let i = 1; i < n; i++) {
    let newStr = "";
    let count = 1;

    for (let j = 1; j < prevStr.length; j++) {
      if (prevStr[j] !== prevStr[j - 1]) {
        newStr = newStr + count + prevStr[j - 1];
        count = 1;
      } else {
        count++;
      }
    }
    newStr = newStr + count + prevStr[prevStr.length - 1];
    prevStr = newStr;
  }

  return prevStr;
}

console.log(countSay(5));
