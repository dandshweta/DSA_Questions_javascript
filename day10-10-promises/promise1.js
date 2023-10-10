let p = new Promise((resolve, reject) => {
  resolve("done");
});
p.then((data) => console.log("resolve:", data)).catch((error) =>
  console.log("rejected", error)
);
let s = new Promise((resolve, reject) => {
  reject("error");
});
s.then((data) => console.log("resolve:", data)).catch((error) =>
  console.log("rejected", error)
);
