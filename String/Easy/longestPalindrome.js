"use strict";

/**
 * Given a string s which consists of lowercase or uppercase letters,
 * return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 *
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome that can be built is "dccaccd",
 *      whose length is 7.
 *
 * Input: s = "a"
 * Output: 1
 * Explanation: The longest palindrome that can be built is "a", whose length is 1.
 */

function longestPalindrome(string) {
  let set = new Set();
  let count = 0;
  for (let char of string) {
    if (set.has(char)) {
      count += 2;
      set.delete(char)
    }
    else {
      set.add(char)
    }
  }
  return count + (set.size > 0 ? 1 : 0);
}