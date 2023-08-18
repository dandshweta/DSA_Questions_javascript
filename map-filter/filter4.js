const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 16 },
];

const adults = people.filter((person) => person.age >= 18);
// adults will contain [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]
