// RA
use std::collections::HashMap;

impl Solution {
    pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut map = HashMap::new(); 
        let mut ans = vec![];

        for i in 0..nums2.len(){
            map.insert(nums2[i], i); 
        }

        for j in 0..nums1.len(){
            let mut k = map[&nums1[j]];
            while k < nums2.len() && nums2[k] <= nums1[j]{
                k += 1;  
            }
            if k == nums2.len(){
                ans.push(-1);  
                continue;  
            } else{ans.push(nums2[k]);}
        }        
         return ans;     
    }
}
