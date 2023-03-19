"use strict";
/** Maximim Product Subarray
 * Given an integer array nums, find a subarray that has the largest product,
 * and return the product.
 *
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 *
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */

function maxProduct(nums) {
  //a previous very negative product can make the result max if it meets another negative number
  //so it's necessary to keep track of min 
  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let options = [nums[i], nums[i] * prevMax, nums[i] * prevMin];
    prevMax = Math.max(...options);
    prevMin = Math.min(...options);
    result = Math.max(prevMax, result);
  }
  return result;
}