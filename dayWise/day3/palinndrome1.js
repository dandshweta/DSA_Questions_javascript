// To check the string or number is palindrome or not( ex: 121,madam,anna)
// using diving length by 2 and then comparing
function palindrome2(str) {
  let palindrome1 = true;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      palindrome1 = false;
      break;
    }
  }
  return palindrome1;
}
console.log(palindrome2("madam"));
