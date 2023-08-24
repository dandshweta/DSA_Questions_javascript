// Remove Duplicate characters from array of element using filter

let arr = ["d", "f", "a", "s", "d", "f"];
let set = [];
const findDuplicate = arr.filter((item) => {
  if (!set.includes(item)) {
    return set.push(item);
    // return true;
  }
  //   return false;
});
console.log(findDuplicate);
