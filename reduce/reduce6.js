//Example 01
let studentData = [
  "John Doe",
  "Some School",
  6,
  7,
  8,
  7,
  9,
  9,
  -1,
  "Some School",
];
let numbers = studentData.reduce((newArray, cur) => {
  if (typeof cur === "number") newArray.push(cur);
  return newArray;
}, []);

console.log(numbers);

// Example 02
let transcript = ["hello", "there,", "how", "is", "it", "going?"];
let finalTranscript = transcript.reduce((acc, cur) => acc + " " + cur);
console.log(finalTranscript);

// Example 03
let realEstate = [
  {
    id: "3c5f4c26-f048-11e9-81b4-2a2ae2dbcce4",
    name: "Vancouver Luxury Apartments",
    price: 450000,
  },
  {
    id: "3c5f4e9c-f048-11e9-81b4-2a2ae2dbcce4",
    name: "Calgary Housing",
    price: 330000,
  },
  {
    id: "3c5f52d4-f048-11e9-81b4-2a2ae2dbcce4",
    name: "AGM Apartments",
    price: 300000,
  },
];

let total = realEstate.reduce((acc, cur) => acc + cur.price, 0);
let average = total / realEstate.length;
console.log(average);
