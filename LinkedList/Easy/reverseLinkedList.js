/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 * 1 -> 4 -> 2 -> 7 -> 9 -> 5
 *
 * 1 <- 4 -< 2 <- 7 <- 9 <- 5
 */
 var reverseList = function(head) {
  if (!head || !head.next) return head;
  let next = null;
  let curr = head; //curr = 1
  let prev = null;
  while (curr !== null) {
      next = curr.next; //save next to use next iteration //next = 4 / 2
      curr.next = prev; //rotate the arrow to point to its left //curr.next = null /
      prev = curr; //moving on, now curr is just in the past //prev = 1
      curr = next; //now curr is ready for next iteration //curr = 4

      // ... -> 4 -> 1 -> null
  }
      head = prev; //now new head is last curr that's not null
  return head;

};

