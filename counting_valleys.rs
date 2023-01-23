use std::env;
use std::fs::File;
use std::io::{self, BufRead, Write};

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

fn countingValleys(steps: i32, path: &str) -> i32 {
    let mut l = 0;
    let mut v = 0;
    for i in path.chars(){
        if i == 'U'{
            l += 1;
            if l == 0 {v += 1};
        }else{
            l -= 1;
        }
    }
    v
}

fn main() {
    let stdin = io::stdin();
    let mut stdin_iterator = stdin.lock().lines();

    let mut fptr = File::create(env::var("OUTPUT_PATH").unwrap()).unwrap();

    let steps = stdin_iterator.next().unwrap().unwrap().trim().parse::<i32>().unwrap();

    let path = stdin_iterator.next().unwrap().unwrap();

    let result = countingValleys(steps, &path);

    writeln!(&mut fptr, "{}", result).ok();
}
