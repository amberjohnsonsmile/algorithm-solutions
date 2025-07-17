// Write a function that takes a list of stock prices and returns the best profit possible
// Indices are the time in minutes past the market opening
// Values are the price
export function getLargestProfit(stockPrices) {
  // Set min value and profit from first possible sale
  let minPrice = stockPrices[0]
  let maxProfit = stockPrices[1] - stockPrices[0]

  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i]
    // Calculate possible profit every time
    const currentProfit = currentPrice - minPrice

    // Keep the largest profit and min values
    maxProfit = Math.max(maxProfit, currentProfit)
    minPrice = Math.min(minPrice, currentPrice)
  }

  return maxProfit
}
