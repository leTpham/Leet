"use strict";

/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 */
 var majorityElement = function(nums) {
  let numsFreqs = freqCounter(nums);
  let major;
  major = Object.keys(numsFreqs).filter(n => numsFreqs[n] > nums.length/2);
  return major[0];
};

function freqCounter(items) {
  let freqs = {};
  for (let item of items) {
      let curr = freqs[item] || 0;
      freqs[item] = curr + 1;
  }
  return freqs;
}