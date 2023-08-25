// Find factorial of user input number

function findFactorial(no) {
  let findFactorialNo = 1;
  for (let i = no; i > 0; i--) {
    findFactorialNo = findFactorialNo * i;
  }
  return findFactorialNo;
}
console.log(findFactorial(4));
