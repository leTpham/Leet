"use strict";

/** Given an integer array nums, return an array answer such that
 * answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
  Input: nums = [1,2,3,4]
  Output: [24,12,8,6]

  Input: nums = [-1,1,0,-3,3]
  Output: [0,0,9,0,0]
*/

function productExceptSelf(nums) {
  let res = [];
  let leftProds = [];
  let rightProds = [];
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    leftProds[i] = left;
    left *= nums[i];
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    rightProds[j] = right;
    right *= nums[j];
    res[j] = rightProds[j] * leftProds[j]
  }
  return res;
}

