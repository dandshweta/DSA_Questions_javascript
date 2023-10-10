const runPromise = () => {
  const p = new Promise((reply, reject) => {
    reply({ message: "Done" });
  });

  return p;
};

const runPromise2 = () => {
  const p = new Promise((reply, reject) => {
    reject({ message: "Error" });
  });

  return p;
};
console.log("1. Promise Started");

// Way 1 - Using .then & .catch
runPromise()
  .then((data) => console.log("3. Success: ", data))
  .catch((err) => console.log("3. Error: ", err));

runPromise2()
  .then((data) => console.log("4. Success: ", data))
  .catch((err) => console.log("4. Error: ", err));

console.log("2. Promise Completed");
