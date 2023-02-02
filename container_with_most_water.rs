// Complexity : O(n)
impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let (mut left, mut right) = (0, height.len()- 1);
        let mut width = right;
        let mut max = 0;
    
        for x in (1..width+1).rev() {
            let mut min;
            if height[left] < height[right] {
                min = height[left];
                left += 1;
            }else if height[right] < height[left] {
                min = height[right];
                right -= 1;
            }else{
                min = height[left];
                if height[left+1] > height[right-1] {left += 1}
                else {right -= 1}
            }
            let current = min * x as i32;
            if current > max {max = current};
        }
        max
    }
}
