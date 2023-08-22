function validParanthesis(str) {
  let arr = str.split("");
  if (arr % 2 === 1) {
    return false;
  } else if (arr[0] === "]" || arr[0] === "}" || arr[0] === ")") {
    return false;
  } else if (
    arr[arr.length - 1] === "[" ||
    arr[arr.length - 1] === "{" ||
    arr[arr.length - 1] === "("
  ) {
    return false;
  }
  return true;
}
console.log(validParanthesis("[{{{}}]"));
