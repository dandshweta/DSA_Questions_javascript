function evenSum(n) {
  if (n <= 1) {
    return 0;
  } else {
    if (n % 2 === 1) {
      return evenSum(n - 1);
    } else {
      return n + evenSum(n - 1);
    }
  }
}
console.log(evenSum(10));
