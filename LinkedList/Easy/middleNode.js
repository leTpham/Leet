"use strict";

/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 */

function middleNode(head) {
  let p1 = head;
  let p2 = head;
  while (p2 !== null) {
    if (p2.next === null) return p1;
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return p1;
}