//there are three methods to create objects.
// 1) object litrals
// 2) using object keyword
// 3) using constructor

//object destructuring
const obj = {
  name: "shweta",
  age: 25,
  obj1: {
    name1: "sh",
    age: 22,
  },
};
console.log(obj);
const { name1, age } = obj.obj1;
const { name, obj1 } = obj;
const msg = `hii ${name} and ${name1}`;
console.log(msg);
