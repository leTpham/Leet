"use strict";

function lowestCommonAncestor(root, p, q) {
  let curr = root;

  while (curr) {
    if (p.val > curr.val && q.val > curr.val ) {
      curr = curr.right;
    }
    else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    }
    else {
      break
    }
  }
  return curr;
}