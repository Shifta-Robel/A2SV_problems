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

function middleNode(head: ListNode | null): ListNode | null {
    let count = 0
    let start = head
    while(head) head = head.next, count++
    for(let i = 0 ; i < count; i++){
        if(i < Math.floor(count/2)){
            start = start.next;
            continue
        }else{
            return start
        } 
    }
};
