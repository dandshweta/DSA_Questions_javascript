function profit(arr) {
  let maxProfit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let profit = arr[j] - arr[i];
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }
  }
  return maxProfit;
}

console.log(profit([7, 1, 5, 9, 3, 6, 4, 10]));
