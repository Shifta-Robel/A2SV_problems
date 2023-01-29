function isPowerOfFour(n: number): boolean {
    if(n < 1) return false
    let ans = Math.log(n) / Math.log(4)
    return ans == Math.floor(ans)
};
