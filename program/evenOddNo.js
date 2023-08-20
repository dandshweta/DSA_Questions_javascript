// Write a program to display whether a number is even or odd

function findEvenOdd(no) {
  if (no % 2 === 0) {
    return `${no} no is even`;
  } else {
    return "no is odd";
  }
}
console.log(findEvenOdd(4));
