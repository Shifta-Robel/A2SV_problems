// 2
use std::collections::BinaryHeap;

struct KthLargest {
    k: i32,
    heap: BinaryHeap<i32>,
}

/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl KthLargest {

    fn new(k: i32, nums: Vec<i32>) -> Self {
        let mut _self = KthLargest {
            k: k,
            heap: BinaryHeap::with_capacity(k as usize + 1),
        };
        for n in nums {
            _self.add(n);
        }
        _self
    }
    
    fn add(&mut self, val: i32) -> i32 {
        self.heap.push(-val);
        if self.heap.len() > self.k as usize {
            self.heap.pop();
        }
        -self.heap.peek().unwrap()
    }
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * let obj = KthLargest::new(k, nums);
 * let ret_1: i32 = obj.add(val);
 */
