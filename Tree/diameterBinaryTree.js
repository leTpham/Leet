"use strict";
/**
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path
 * between any two nodes in a tree. This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
 *
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 */
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

  //Get height of left and right sub-trees;
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  //Get diameter of left and right sub-trees;
  let leftDiameter = diameter(root.left);
  let rightDiameter = diameter(root.right);
  
  //Return max of the following:
  // 1) Diameter of left subtree
  // 2) Diameter of right subtree
  // 3) Height of left sub-tree + height of right sub-tree
  return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter))

}