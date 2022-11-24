"use strict";

/** Given a binary tree, determine if it is height-balanced.
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 */

function isBalanced(root) {
  if (!root) return true; //base case

  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  if (Math.abs(leftHeight - rightHeight) <= 1
    && isBalanced(root.left) === true && isBalanced(root.right) === true) {
    return true;
  }
  return false;

}

/**
 * function to find height of binary tree
 */

function height(root) {
  if (!root) return 0;
  return Math.max(height(root.left), height(root.right));
}