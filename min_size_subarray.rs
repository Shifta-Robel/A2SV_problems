impl Solution {
    pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
        let mut ans = std::i32::MAX;
        let mut sum = 0;
        let mut left = 0;

        for (i, &num) in nums.iter().enumerate() {
            sum += num;
            while sum >= target {
                ans = std::cmp::min(ans, (i + 1 - left) as i32);
                sum -= nums[left];
                left += 1;
            }
        }

        if ans == std::i32::MAX { 0 } else { ans }
    }
}
