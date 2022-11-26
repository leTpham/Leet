"use strict";
/**
 * Given two strings ransomNote and magazine, return true if
 * ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 */


function canConstruct(ransomNote, magazine) {
  let rNFreqs = freqCounter(ransomNote);
  let magFreqs = freqCounter(magazine);
  for (let letter in rNFreqs) {
      if (!magFreqs[letter] || (rNFreqs[letter] > magFreqs[letter])) {
          return false
      }
  }
  return true;
};

function freqCounter(items) {
  let freqs = {};
  for (let item of items) {
      let curr = freqs[item] || 0;
      freqs[item] = curr + 1;
  }
  return freqs;
}