impl Solution {
    pub fn max_score(card_points: Vec<i32>, k: i32) -> i32 {
        let mut res = 0;
        for i in 0..k { 
            res+=card_points[i as usize]; 
        }
        let mut curr=res;
        for i in (0..k).rev() { 
            curr-=card_points[i as usize];
            curr+=card_points[((card_points.len()-k as usize)+i as usize) as usize];
        res = if res > curr {res} else {curr} 
    }
    return res;        
    }
}
