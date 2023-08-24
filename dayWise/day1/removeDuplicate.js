// Remove Duplicate characters from String

function removeDuplicates(str) {
  let newArr = str.toLowerCase().split("");
  console.log(newArr);
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (!result.includes(newArr[i])) {
      result.push(newArr[i]);
    }
  }
  return result.toString();
}
console.log(removeDuplicates("Ssnrstttsn"));
