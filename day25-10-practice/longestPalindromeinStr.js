function longestPalindrome(str) {
  let arr = str.toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length / 2; j++) {
      if (arr[j] !== arr[arr[j].length - 1 - i]) {
        count++;
      }
    }
  }
}
console.log(longestPalindrome("she is a Madam she took the racecar "));
