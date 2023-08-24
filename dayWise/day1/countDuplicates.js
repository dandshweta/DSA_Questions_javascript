// Remove Duplicate characters from array of element and find the count of an elements using set
function removeDuplicates(str) {
  let a = [];

  let arr = str.toLowerCase().split("");
  for (let i = 0; i < arr.length; i++) {
    if (!a.includes(str[i])) {
      a.push(str[i]);
    }
  }
  // console.log(a);
  for (let j = 0; j < a.length; j++) {
    let count = 0;
    for (let k = 0; k < arr.length; k++) {
      if (a[j] === arr[k]) {
        count++;
      }
    }
    // a = count + a[j];
    // count = 1;
    a[j] = { char: a[j], count: count };
  }

  return a;
}

console.log(removeDuplicates("ssddghrrrntnsrt"));
