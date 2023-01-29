// RA
impl Solution {
    pub fn rearrange_array(nums: Vec<i32>) -> Vec<i32> {
        let mut nums = nums;
        let mut a = nums[0] < nums[1];

        for i in 1..nums.len() - 1 {
            if (a && nums[i] < nums[i + 1]) || (!a && nums[i] > nums[i + 1]) {
                let t = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = t;
            }
            a = !a;
        }

        return nums;
    }
}
