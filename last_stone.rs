// 2nd try
impl Solution {
    pub fn last_stone_weight(stones: Vec<i32>) -> i32 {
        use std::collections::BinaryHeap;

        let mut heap = BinaryHeap::from(stones);
        while heap.len() > 1 {
            let max = heap.pop().unwrap();
            let max2 = heap.pop().unwrap();
            heap.push(max - max2)
        }
        heap.pop().unwrap_or(0)
    }
}
