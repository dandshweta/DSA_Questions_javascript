const result = arr.reduce((previousVal, currentVal, index, arrElem) => {
  console.log({ previousVal, currentVal, index, arrElem });
  previousVal += currentVal; // 0+1 -> 1
  return previousVal;
}, 0);
