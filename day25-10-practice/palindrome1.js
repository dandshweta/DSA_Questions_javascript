function palindrome(str) {
  let arr = str.toLowerCase().split("");
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("Madam"));
console.log(palindrome("asdffg"));
