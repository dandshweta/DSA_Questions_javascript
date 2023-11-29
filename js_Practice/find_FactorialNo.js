function factorial(num) {
  if (num === 0) {
    return 1;
  }
  let output = 1;
  for (let i = 1; i <= num; i++) {
    output = output * i;
  }
  return output;
}
console.log(factorial(5));
