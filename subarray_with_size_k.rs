impl Solution {
    pub fn num_of_subarrays(arr: Vec<i32>, k: i32, threshold: i32) -> i32 {
        let (mut i,mut j,mut ans,mut sum)=(0,0,0,0);
        let n = arr.len();

        while j < n {
            sum += arr[j];
            if (j - i + 1) == k as usize{
                let avg = sum / k;
                if avg >= threshold{ ans+=1; }
                sum -= arr[i];
                i+=1;
            }
            j+=1;
        }
        return ans;        
    }
}
