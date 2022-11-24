"use strict";

/** Given a binary tree, determine if it is height-balanced.
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 */

/** https://stackoverflow.com/questions/742844/how-to-determine-if-binary-tree-is-balanced
 *
 IsHeightBalanced(tree)
    return (tree is empty) or
           (IsHeightBalanced(tree.left) and
            IsHeightBalanced(tree.right) and
            abs(Height(tree.left) - Height(tree.right)) <= 1)
 */

function isBalanced(root) {
  if (!root) return true;
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  if (Math.abs(leftHeight - rightHeight) <= 1
    && isBalanced(root.left) && isBalanced(root.right)) {
    return true;
  }
  return false;
}

/**
 * function to find height of binary tree
 */

function height(root) {
  if (!root) return 0;
  return Math.max(height(root.left), height(root.right)) + 1;
}