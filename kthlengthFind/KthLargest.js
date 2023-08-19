const findKthLargest = (arr, k) => {
  const positiveArr = [];
  const negativeArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];

    if (currentVal >= 0) {
      const valOnCurrentIndex = positiveArr[currentVal] || 0;
      positiveArr[currentVal] = valOnCurrentIndex + 1;
      continue;
    }

    currentVal = Math.abs(currentVal);
    const valOnCurrentIndex = negativeArr[currentVal] || 0;
    negativeArr[currentVal] = valOnCurrentIndex + 1;
  }

  console.log({ positiveArr, negativeArr });

  let matches = k;
};

findKthLargest([0, 0, 3, 3, 2, 1, 5, 6, 4, -4, -6, -5], 2);
