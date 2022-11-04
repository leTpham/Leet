"use strict";
/** You are given an array prices where prices[i] is the price of a given stock
 * on the ith day.

 * You want to maximize your profit by choosing a single day to buy one stock and
 * choosing a different day in the future to sell that stock.

 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 *
 * */

function maxProfit(prices) {
  let maxProf = 0;
  //assume cheapest time to buy stock was on 0th day
  let minSell = prices[0];
  for (let i = 0; i < prices.length; i++) {
    //if see a smaller price, that'd be cheapest buy now
    minSell = Math.min(minSell, prices[i]);
    //maximim profit would be the largest possible difference between current
    //price and last recoreded minimum selling price.
    maxProf = Math.max(maxProf, prices[i] - minSell);
  }
  return maxProf;
}