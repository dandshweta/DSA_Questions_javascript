const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const map1 = arr.map((a) => {
  return a * 2;
});
console.log(map1);
const obj = [
  {
    name: "shweta",
    city: "Latur",
    age: 25,
  },
  {
    name: "sh",
    city: "pune",
    age: 20,
  },
];
const obj1 = obj.filter((item) => {
  if (item.name === "sh" || item.age <= 25) {
    return item;
  }
});
console.log(obj1);
const arr5 = [2, 3, 4, 5, 6];
const reduce1 = arr5.reduce((prev, curr) => {
  return arr5;
});
console.log(arr5);
