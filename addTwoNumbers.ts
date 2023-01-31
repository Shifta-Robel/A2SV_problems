// Complexity : O(n)
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let sol = new ListNode()
    let a = l1, b = l2, c = sol;
    while(a || b){
        let av = a ? a.val : 0, bv = b ? b.val : 0
        let val = av + bv + carry
        carry = val > 9 ? 1 : 0
        if(a) a = a.next
        if(b) b = b.next
        sol.next = new ListNode(val % 10)
        sol = sol.next
    }
    sol.next = carry ? new ListNode(1) : null;
    return c.next
};
