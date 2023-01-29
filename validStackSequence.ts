function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let stack = new Array(pushed.length);
    let j = 0;
    for(let i of pushed){
        stack.push(i)
        while(stack.length != 0 && stack[stack.length - 1] == popped[j]){
            stack.pop()
            j++
        }
    }
    return stack.length == 0
};
