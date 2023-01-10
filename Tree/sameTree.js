"use strict";
/** Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Input: p = [1,2,3], q = [1,2,3]
Output: true

Input: p = [1,2], q = [1,null,2]
Output: false

Input: p = [1,2,1], q = [1,1,2]
Output: false
*/

function isSameTree(p, q) {
  //if we have exhausted both trees, or they are null from the beginning
  if (!p && !q) return true;
  //if either tree is shorter or their node's value doesn't match
  if ((!p && q) || (p && !q) || (p.val !== q.val)) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}