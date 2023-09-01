function countSay(n) {
  let str = "1";

  for (let i = 1; i < n; i++) {
    let newStr = "";
    let count = 1;

    for (let j = 1; j < str.length; j++) {
      if (str[j] !== str[j - 1]) {
        newStr = newStr + count + str[j - 1];
        count = 1;
      } else {
        count++;
      }
    }
    newStr = newStr + count + str[str.length - 1];
    // console.log(newStr);
    str = newStr;
  }

  return str;
}

console.log(countSay(5));
