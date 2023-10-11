const promise = () => {
  return new Promise((reply, reject) => {
    reject(1);
  });
};

promise()
  .then((data) => {
    console.log("LN9: ", data);
    return data + 1;
  })
  .then((data) => {
    console.log("LN16: ", data);
    return data + 2;
  })
  .then((data) => {
    console.log("LN20: ", data);
    return data + 3;
  })
  .then((data) => {
    console.log("LN24: ", data);
    return data + 4;
  })
  .catch((err) => {
    console.log("Err 28: ", err);
  });
