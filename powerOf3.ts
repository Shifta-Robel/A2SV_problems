function isPowerOfThree(n: number): boolean {
    let ans = Math.log(n) / Math.log(3)
    if(Object.is(ans, NaN) || Object.is(ans, -Infinity)) return false
    return Math.floor(ans).toFixed(14) == ans.toFixed(14)
};
