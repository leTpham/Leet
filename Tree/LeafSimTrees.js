"use strict";

/** Consider all the leaves of a binary tree, from left to right order, the
 * values of those leaves form a leaf value sequence.
 *
 * Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
 * Output: true
 *
 * Input: root1 = [1,2,3], root2 = [1,3,2]
 * Output: false
 */

 function leafSimilar (root1, root2) {
  let leaf1 = [];
  let leaf2 = [];
  getLeaf(root1, leaf1)
  getLeaf(root2, leaf2)

  return (leaf1.length === leaf2.length && leaf1.every((v, i) => leaf2[i] === v));
}

function getLeaf(node, leaves = []) {
  if (node) {
    if (!node.left && !node.right) {
      leaves.push(node.val)
    }
    getLeaf(node.left, leaves);
    getLeaf(node.right, leaves);
  }
}