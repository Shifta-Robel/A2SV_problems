/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let ptr = head, size = 0;
    while(ptr){
        ptr = ptr.next
        size++
    } 
    let tmp = ptr = new ListNode(null,head);
    for(let i = 0; i < size - n; i++) ptr = ptr.next
    
    ptr.next = ptr.next ? ptr.next.next : null
    return tmp.next
};
