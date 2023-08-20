function findNegativePositiveNo(no) {
  if (no === 0) {
    return "no is zero";
  } else if (no > 0) {
    return "no is positive";
  } else {
    return "no is negative";
  }
}
console.log(findNegativePositiveNo(80));
