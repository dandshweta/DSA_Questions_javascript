var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } else {
      const currentProfit = currentPrice - minPrice;
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
