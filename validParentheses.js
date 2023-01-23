/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s){
    if(s.length % 2 != 0) return false;
    let stack = [];
    let map = (new Map()).set('{','}').set('(', ')').set('[', ']');
    if(map.has(s[s.length - 1])) return false;
    for( let item of s){
        if(map.has(item)) stack.push(item);
        else if(Array.from(map.values()).includes(item)){
            if(stack.length == 0 || map.get(stack[stack.length - 1]) != item)
                return false;
            stack.pop()
        }
    }
    return !stack.length;
}
