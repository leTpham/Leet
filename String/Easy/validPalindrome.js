"use strict";
/**
 * A phrase is a palindrome if, after converting all uppercase letters
 * into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.

 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 */

function isPalindrome(s) {
  const valid = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
  let sArr = s.split("");
  let onlyValidInS = [];
  //get rid of all
  for (let i = 0; i < sArr.length; i++) {
      if (valid.includes(sArr[i])) {
          onlyValidInS.push(sArr[i])
      }
  }
  let leftIdx = 0;
  let rightIdx = onlyValidInS.length-1;
  while (leftIdx <= rightIdx) {
      if (onlyValidInS[leftIdx].toLowerCase() !== onlyValidInS[rightIdx].toLowerCase()) return false;
      leftIdx++;
      rightIdx--;
  }
  return true;

};