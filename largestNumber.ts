// complexity : O(nlogn) - assuming sort takes O(nlogn)
function largestNumber(nums: number[]): string {
    nums.sort((c, n) => {
        if(c == n) return 0
        let a = c.toString(), b = n.toString()
        return parseInt(a + b) > parseInt(b + a) ? -1 : 1
    })
    
    let str = nums.join("")
    return parseInt(str) ? str : '0'
};
