"use strict";
/**
 * Definition for a binary tree node.
 * */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }


/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 *  * @param {TreeNode} root
 * @return {number}
 */

function maxDepth(root) {
  if (!root) return 0;
  //we add 1 to height because a tree with only root node has height 0,
  //so once tree advances after condition we start adding 1
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}