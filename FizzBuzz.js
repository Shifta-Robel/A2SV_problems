/**
 * @param {number} n
 * @return {string[]}
 * complexity : O(n)
 */
var fizzBuzz = function(n) {
    let str =[];
    for(let i=1; i<=n; i++){
        if(!(i%15)) str.push("FizzBuzz")
        else if(!(i%3)) str.push("Fizz")
        else if(!(i%5)) str.push("Buzz")
        else str.push(i+'')
    }
    return str;
};
