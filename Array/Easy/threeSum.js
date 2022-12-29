"use strict";
/** Given an integer array nums,
 * return all the triplets [nums[i], nums[j], nums[k]] such that
 * i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

function threeSum(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  if (nums.length < 3) return res;

  //i as left-most anchor
  for (let i = 0; i < nums.length - 2; i++) {
    // once i's value is 0, stop since positive numbers can't add up to 0
    if (nums[i] > 0) return res;

    //since we don't want repeats, skip if we've already seen
    if (nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    //for each i of nums array, have a while loop to check for
    //all possible combos for that i
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      //if find the combo, keep increment j and decrement k for other possible ones
      //with the same anchor i (we can do this because we have sorted the array)
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);

        //skip j and k if duplicate within the same anchor i
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        //move j and k toward each other to check for other combos for current i
        j++;
        k--;
      }
      //if sum is too small, we need it to be larger => needs to inch j to the right
      else if (sum < 0) {
        j++;
      }
      //if sum is too big, we need it to be smaller => needs to inch k to the left

      else {
        k--;
      }
    }

  }
  return res;
}