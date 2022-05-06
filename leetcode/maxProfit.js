
var maxProfit = function(prices) {
  let min = prices[0],res = 0
  for(let i = 1; i< prices.length; i++){
    res = Math.max(res, prices[i] - min)
    min = Math.min(min,prices[i])
  }
  return res
};

const input = [7,1,5,3,6,4]

console.log(maxProfit(input))