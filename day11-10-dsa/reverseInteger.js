function reverseInt(num) {
  let result = 0;
  while (num > 0) {
    result = result * 10 + (num % 10);
    // num = parseInt(num / 10);
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(reverseInt(123456));
