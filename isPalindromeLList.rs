// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn is_palindrome(head: Option<Box<ListNode>>) -> bool {
        let mut v = Vec::new();
        let mut head = head;
        while let Some(node) = head {
            v.push(node.val);
            head = node.next;
        }
        for i in 0..v.len() / 2 {
            if v[i] != v[v.len() - 1 - i] { return false; }
        }
        true
    }
}
