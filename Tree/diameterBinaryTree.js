"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function height(root) {
  if (!root) return 0;
  return Math.max(height(root.left), height(root.right)) + 1;
}
function diameter(root) {
  if (!root) return 0;
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  let leftDiameter = diameter(root.left);
  let rightDiameter = diameter(root.right);

  return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter))

}