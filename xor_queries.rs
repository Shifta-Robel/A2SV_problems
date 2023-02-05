impl Solution {
    pub fn xor_queries(arr: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let mut arr = arr; 
        let mut res = vec![];
        for i in 1..arr.len() {
            arr[i] = arr[i] ^ arr[i - 1];
        }
        for i in 0..queries.len() {
            let x = queries[i][0] as usize;
            let y = queries[i][1] as usize;

            if x == 0 {
                res.push(arr[y]);
            } else {
                let val = arr[y] ^ arr[x - 1]; 
                res.push(val); 
            }
        }
        return res;
    }
}
