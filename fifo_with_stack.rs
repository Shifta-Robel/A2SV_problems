// 2nd
struct MyQueue {
    input : Vec<i32>,
    output : Vec<i32>,
}

impl MyQueue {

    fn new() -> Self {
        Self { input: Vec::new(), output: Vec::new() }
    }
    
    fn push(&mut self, x: i32) {
        self.input.push(x);
    }
    
    fn pop(&mut self) -> i32 {
        self.output.pop().unwrap_or_else(|| {
            while let Some(n) = self.input.pop() { self.output.push(n); }
            self.output.pop().expect("Queue empty!")
        })
    }
    
    fn peek(&self) -> i32 {
        *self.output.last().unwrap_or_else(|| {
            self.input.first().expect("Queue empty!")
        })
    }
    
    fn empty(&self) -> bool {
        self.input.is_empty() && self.output.is_empty()
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * let obj = MyQueue::new();
 * obj.push(x);
 * let ret_2: i32 = obj.pop();
 * let ret_3: i32 = obj.peek();
 * let ret_4: bool = obj.empty();
 */
