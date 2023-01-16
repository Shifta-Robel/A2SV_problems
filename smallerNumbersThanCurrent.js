/**
 * @param {number[]} nums
 * @return {number[]}
 * complexity : O(n)
 */
var smallerNumbersThanCurrent = function(nums) {
    // count sort
    let count = new Array(100).fill(0)
    nums.forEach(item => ++count[item])

    // map to sum up to index item
    return nums.map((item) => {
        let sum = 0
        for(let i = 0; i < item; i++) sum += count[i]
        return sum
    })
};
