// complexity: O(n)
impl Solution {
    pub fn pivot_index(nums: Vec<i32>) -> i32 {
        let (mut left, mut right, mut sum) = (0, 0, 0);
        for item in &nums {right += item;}
        sum = right;
        right -= nums[0];
        for i in (0..nums.len() -1) {
            if left == right { return i as i32; }
            left += nums[i];
            right -= nums[i + 1];
        }
        if sum - nums[nums.len() - 1] == 0 { return nums.len() as i32 - 1; }
        -1
    }
}
