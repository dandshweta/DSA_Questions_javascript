function validParanthesis(str) {
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "[") {
      newArr.push("]");
    } else if (arr[i] === "{") {
      newArr.push("}");
    } else if (arr[i] === "(") {
      newArr.push(")");
    } else if (arr[i] !== newArr.pop()) {
      return "not valid paranthesis";
    }
  }
  if (newArr.length === 0) {
    return "valid parathesis";
  }
}
console.log(validParanthesis("[{[()]}]"));
