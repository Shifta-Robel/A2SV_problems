/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * complexity: O(n)
 */
var sortColors = function(nums) {
    for(let left = 0, right = nums.length -1, i = 0; i <= right; i++){
        if(nums[i] === 0){
            let temp = nums[left];
            nums[left] = nums[i]
            nums[i] = temp 
            left++
        }else if(nums[i] === 2){
            let temp = nums[right];
            nums[right] = nums[i]
            nums[i] = temp 
            right--
            i--
        }
    }
};
