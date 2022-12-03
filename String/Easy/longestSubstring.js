"use strict";

/** Given a string s, find the length of the longest substring without repeating characters.
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

 function lengthOfLongestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let counter = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    //if already seen character, AND its index is larger than current dup one
    //(meaning we have not cut it off yet), cut off to get current substring
    //starting from the one right next to it
    //(eg: a.b.c.d.e.f.c.h.u.i.h.o.p.c.l.m ... (DUPS of c example)
    //-> first reset: start at "d" counter = {..., c = 2,...} -> start = 3
    //-> second reset: start at "h" counter = {..., c=6,...} -> start = 7
    //right after the first duplicated c)
    if (counter[char] >= start) start = counter[char] + 1;
    counter[char] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}