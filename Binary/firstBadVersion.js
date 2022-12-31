"use strict";

/**
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check.
 * Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad.
Implement a function to find the first bad version. You should minimize the number of calls to the API.

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Input: n = 1, bad = 1
Output: 1
 */

function isBadVersion() {
  return function(n) {
    let left = 1;
    let right = n;
    while (left < right) {
      let mid = Math.floor((left + right)/2);
      //if mid num is already bad, basically push it to only check the stuff before mid
      //by resetting the right anchor to be current mid, disregard the second half of the set
      if (isBadVersion(mid)) {
        right = mid;
      }
      //if mid num is not yet bad, disregard the left set since they are all good,
      //by resetting the left anchor to be the num after current mid,
      //and repeat the process with the second half until find bad version
      else {
        left = mid + 1;
      }
    }
    return left;
  }
}