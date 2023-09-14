function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

const inputArray = [1, 2, 3, 4, 1, 2, 3, 4, 5, 8, 9, 6, 4, 4, 2, 1];
const result = removeDuplicates(inputArray);
console.log(result);
