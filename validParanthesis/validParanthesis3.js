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
  }

  return true;
}
console.log(validParanthesis("([{}]}])"));
