let uName = "Sanskriti";

const output = {
  a: 1,
  k: 1,
  i: 2,
  n: 1,
  r: 1,
  s: 2,
};

const result = uName
  .toLowerCase()
  .split("")
  .reduce((previous, current) => {
    // Logic
    if (previous.hasOwnProperty(current)) {
      previous[current]++;
    } else {
      previous[current] = 1;
    }

    return previous;
  }, {});

console.log("Result: ", result);
