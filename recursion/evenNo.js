const runLoopInReverseUsingRecursion = (num) => {
  const iterateNumber = (i) => {
    if (i % 2 === 0) {
      console.log(i);
    }
    if (i !== 0) {
      i--;
      iterateNumber(i);
    }
  };

  iterateNumber(num);
};

runLoopInReverseUsingRecursion(10);
