// 2nd
impl Solution {
    pub fn longest_ones(nums: Vec<i32>, k: i32) -> i32 {
        let mut start = 0;
        let mut end = 0;
        let mut ans = std::i32::MIN;
        let mut k = k;

        for end in 0..nums.len() {
            if nums[end] == 0 { k -= 1; }
            while k < 0 {
                if nums[start] == 0 { k += 1; }
                start += 1;
            }
            ans = std::cmp::max(ans, (end - start + 1) as i32); 
        }
        ans
    }
}
