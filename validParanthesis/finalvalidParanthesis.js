function validParanthesis(str) {
  let arr = str.split("");
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
      stack.push(arr[i]);
    } else if (arr[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (arr[i] === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (arr[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(validParanthesis("[[{}"));
