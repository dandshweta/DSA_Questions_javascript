console.log("shweta");
const p = () => {
  return new Promise((reply, reject) => {
    reply("promise done");
  });
};
p()
  .then((data) => console.log(" Promise Output: ", data))
  .catch((err) => console.log("Error: ", err));
console.log("dand");
