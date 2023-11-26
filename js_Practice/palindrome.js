function palindrome(str) {
  let newStr = str.toLowerCase().split("");
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("Madam"));

//inbuilt method

function Palindrome1(str) {
  let newStr = str.toLowerCase().split("").join("");
  let reverse1 = newStr.split("").reverse().join("");
  //   let reverse1 = newStr.reverse().join("");
  if (newStr === reverse1) {
    return true;
  } else {
    return false;
  }
}
console.log(Palindrome1("madam"));
console.log(Palindrome1("mad"));
