function validParanthesis(str) {
  let arr = str.split("");
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(")");
    } else if (arr[i] === "{") {
      stack.push("}");
    } else if (arr[i] === "[") {
      stack.push("]");
    } else if (arr[i] !== stack.pop()) {
      return false;
    }
    // else if (arr[i] === stack.length - 1) {
    //   stack.pop();
    // }
    console.log(stack);
  }
  return stack.length === 0;
}
console.log(validParanthesis("[{[{}]}]"));
