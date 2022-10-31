"use strict";
/** Given an integer array nums,
 * return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 * Input: nums = [1,2,3,1]; Output: true
 * Input: nums = [1,2,3,4]; Output: false
 */

function containsDuplicate(nums) {
  const freqsNum = freqCounter(nums);
  return Object.keys(freqsNum).length < nums.length;
};

function freqCounter(items) {
  let freqs = {};
  for (let item of items) {
      let curr = freqs[item] || 0;
      freqs[item] = curr + 1;
  }
  return freqs;
}