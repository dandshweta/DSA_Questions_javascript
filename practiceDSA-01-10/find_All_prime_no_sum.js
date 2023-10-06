function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function sumOfPrimesInArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
    }
  }

  return sum;
}

// Example usage:
const numbers = [2, 3, 5, 7, 10, 11];
const result = sumOfPrimesInArray(numbers);
console.log(result); // Output: 28 (2 + 3 + 5 + 7 + 11)
