"use strict";
/** Given an integer array nums,
 * return all the triplets [nums[i], nums[j], nums[k]] such that
 * i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

function threeSum(nums) {
  let res = [];
  nums.sort((a,b) => a - b);
  if (nums.length < 3) return res;
  for (let i = 0; i < nums.length -2; i++) {
    if (nums[i] > 0) return res;
    if (nums[i] === nums[i-1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j+1]) j++;
        while (nums[k] === nums[k-1]) k--;
        j++;
        k--;
      }
      else if (sum < 0) {
        j++;
      }
      else {
        k--;
      }
    }

  }
  return res;
}