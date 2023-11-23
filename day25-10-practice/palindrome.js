function palindrome(str) {
  const arr = str.toLowerCase().split("");
  //   console.log(arr);

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("Madam"));
console.log(palindrome("asfdsa"));
