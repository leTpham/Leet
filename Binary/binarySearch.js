"use strict";

/** Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example: Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 */

 function binarySearch(nums, target) {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;
  while (leftIdx <= rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx)/2);
      let midVal = nums[midIdx];
      if (midVal === target) return midIdx;
      if (midVal < target) {
          leftIdx = midIdx + 1;
      }
      else {
          rightIdx = midIdx - 1;
      }
  }
  return -1;
};