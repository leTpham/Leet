"use strict";

/**
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 * - Every close bracket has a corresponding open bracket of the same type.

 */

function isValid(s) {
  let stack = [];
  if (s.length % 2 === 1) return false;
  for (let l of s) {
      if (l === "(" || l === "[" || l === "{") {
          stack.push(l)
      }

  if (stack.length === 0) return false;
  let check;
      switch (l){
          case ")":
          check = stack.pop();
                  if (check !== "(") return false;
                  break;
          case "}":
          check = stack.pop();
                  if (check !== "{") return false;
                  break;
          case "]":
          check = stack.pop();
                  if (check !== "[") return false;
                  break;
      }
  }
      return stack.length === 0;
};