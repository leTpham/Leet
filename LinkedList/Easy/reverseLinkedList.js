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
 */
 var reverseList = function(head) {
  if (!head || !head.next) return head;
  let next = null;
  let curr = head;
  let prev = null;
  while (curr !== null) {
      next = curr.next; //save next to use next iteration
      curr.next = prev; //rotate the arrow to point to its left
      prev = curr; //moving on, now curr is just in the past
      curr = next; //now curr is ready for next iteration
  }
      head = prev; //now new head is last curr that's not null
  return head;

};

