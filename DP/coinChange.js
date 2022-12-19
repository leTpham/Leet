"use strict";

/**You are given an integer array coins representing coins of different
 * denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin. */

function leastCoins(coins, target) {
  let results = [0];
  for (let i = 1; i <= target; i++) {
    let currMin = Infinity;
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        if (1 + results[i - coins[j]] < currMin) {
          currMin = 1 + results[i - coins[j]]
        }
      }
    }
    results[i] = currMin
  }
  return results[results.length - 1] !== Infinity ? results[results.length - 1] : -1
}

/* Use Inductive Reasoning
base case: if target = 0 -> results = 0 (needs 0 coin)
if target = 1 -> results = 0 + 1
if target = 2 -> results = 1 + results of 1
...
if target = n -> results = 1 + results of (n-1)

--> iterate from 1 to target amount
  and record the result for each increment in array
  eg: results[10] is the coins needed for target of 10
  (keep in mind: only replace currMin if:
    - the target is doable (there is a coin smaller than it)
    - the new result is smaller than currMin).

    the desired output will be the last element of results array, as it is the
    smallest possible coin change combination for the target
    (recorded at results[target])

 */