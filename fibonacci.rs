impl Solution {
    pub fn fib(n: i32) -> i32 {
        let (mut a, mut b) = (0, 1);
        for i in 0..n{
            let temp = b;
            b += a;
            a = temp;
        }
        a
    }
}
