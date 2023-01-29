// complexity O(1)
use std::io;
use std::str::FromStr;
 
fn main() {
    let mut input_n = String::new();
    io::stdin()
        .read_line(&mut input_n)
        .expect("Failed to read line");
    let input_n = input_n.trim();
 
    let split = input_n.split(" ").collect::<Vec<_>>();
    let (n,m,a) = get_numbers(&split);
    println!("{}",(n as f64/a as f64).ceil() *(m as f64/a as f64).ceil());
}

fn get_numbers(nums:&Vec<&str>) -> (i64,i64,i64){
    let v = nums.iter().map(|s| i64::from_str(s).expect("failed to parse number"))
                .collect::<Vec<_>>();
    (v[0], v[1], v[2])
}
