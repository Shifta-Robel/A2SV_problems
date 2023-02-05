use std::collections::HashMap;
impl Solution {
    pub fn subarray_sum(nums: Vec<i32>, k: i32) -> i32 {
        let mut mp = HashMap::new();
        let (mut res, mut sum) = (0,0);

        for &n in nums.iter() {
            sum += n;
            if sum == k { res += 1; }
            let ans = sum - k;
            if mp.contains_key(&ans) { 
                res += *mp.get(&ans).unwrap(); 
            }
            *mp.entry(sum).or_insert(0) += 1;
        }
        return res as i32; 
    }
}
