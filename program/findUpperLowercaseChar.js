// Write a program to display whether a character is an uppercase or lowercasealphabet.

// function findUpperLowercaseChar(char) {
//   if (char > 65 && char > 90) {
//     return "character is capital";
//   } else if (char > 97 && char < 122) {
//     return "character is small";
//   } else {
//     return "special character";
//   }
// }
// console.log(findUpperLowercaseChar("A"));

function findUpperLowercaseChar(char) {
  const charCode = char.charCodeAt(0); // Get the ASCII value of the character

  if (charCode >= 65 && charCode <= 90) {
    return "character is capital";
  } else if (charCode >= 97 && charCode <= 122) {
    return "character is small";
  } else {
    return "special character";
  }
}

console.log(findUpperLowercaseChar("A")); // Replace with the character you want to check
