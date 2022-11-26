"use strict";

/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 */

function climbStairs(n) {
  let arrWays = []
  arrWays[1] = 1
  arrWays[2] = 2

  for (let i = 3; i <= n; i++) {
    arrWays[i] = arrWays[i-1] + arrWays[i-2])
  }
  return arrWays[n];
}
