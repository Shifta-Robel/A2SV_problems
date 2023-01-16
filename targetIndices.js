/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * complexity : O(n)
 */
var targetIndices = function(nums, target) {
    // count sort
    let count = new Array(101).fill(0)
    nums.forEach(item => ++count[item])
    
    let answer = [], sum = 0
    for(let i=0; i< target; i++) 
        sum += count[i];
    for(let i =0 ; i< count[target]; i++) 
        answer.push(sum + i)
    return answer
};
