/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
* typically using all the original letters exactly once.

* Input: s = "anagram", t = "nagaram"
* Output: true

* Input: s = "rat", t = "car"
* Output: false
 */

function isAnagram(s, t) {
  let sFreqs = frequencyCounter(s);
  let tFreqs = frequencyCounter(t);
  if (Object.keys(sFreqs).length !== Object.keys(tFreqs).length) return false;
  for (let letter in sFreqs) {

      if (sFreqs[letter] !== tFreqs[letter]) return false;
  }
  return true;
};

function frequencyCounter(items) {
  let freqs = {};
  for (let item of items) {
      let curr = freqs[item] || 0;
      freqs[item] = curr + 1;
  }
  return freqs;
}