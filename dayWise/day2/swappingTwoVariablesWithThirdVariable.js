function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return { a, b };
}
console.log(swap(2, 4));
