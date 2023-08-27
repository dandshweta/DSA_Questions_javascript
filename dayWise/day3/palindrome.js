// // To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method

function palindrome(str) {
  let str1 = str.split("").reverse().join("");
  return str === str1;
}

console.log(palindrome("madam"));
