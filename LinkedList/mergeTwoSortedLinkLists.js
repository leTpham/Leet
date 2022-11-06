"use strict";

// Definition for singly-linked list's NODE??
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/** You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 * Return the head of the merged linked list. */


function mergeTwoSortedLinkLists(list1, list2) {
  let merged = new ListNode(); //[0]
  //variable 'head' to keep track of the head of merged list to return later
  let head = merged;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      //splice the first node from list1 and connect it to merged
      merged.next = new ListNode(list1.val);
      //cut first one off list 1
      list1 = list1.next;
    }
    else {
      merged.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    //moving along the chain to keep adding to the end
    merged = merged.next;
  }
  //if either list still has nodes cause different lengths
  if (list1 !== null) {
    merged.next = list1;
  }
  if (list2 !== null) {
    merged.next = list2;
  }
  //returning merged list starting from second number because first one is 0/null when created
  return head.next;
}