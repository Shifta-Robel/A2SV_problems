// RA 2nd 
impl Solution {
    pub fn check_arithmetic_subarrays(nums: Vec<i32>, l: Vec<i32>, r: Vec<i32>) -> Vec<bool> {
        let mut ans = vec![];
        for ind in 0..l.len() {
            let mut dem = nums[l[ind] as usize..=r[ind] as usize].to_vec();
            dem.sort();
            ans.push(dem.windows(2).all(|w| w[1] - w[0] == dem[1] - dem[0]));
        }    
        return ans; 
    }
}
