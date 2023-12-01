var chotiBahu = "Diya";
var badiBahu = "Roopa";

function parents() {
  function romesh() {
    console.log("Romesh : Choti Bahu: ", {
      chotiBahu: this.chotiBahu,
      badiBahu: this.badiBahu,
    });
  }

  const somesh = () => {
    console.log("Somesh : Badi Bahu: ", {
      chotiBahu: this.chotiBahu,
      badiBahu: this.badiBahu,
    });
  };

  //romesh();
  // Kalawa bandh do
  romesh.call(this);
  somesh();

  return "Done";
}

console.log(
  "Mehman Arrives & ask for GFs: ",
  parents.call({ chotiBahu: "Phoolmati", badiBahu: "Katoridevi" })
);
