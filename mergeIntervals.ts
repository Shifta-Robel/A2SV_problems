// complexity: O(nlogn) assuming sort = O(nlogn)
function merge(intervals: number[][]): number[][] {
    let lastIndex = intervals.length - 1
    if(lastIndex < 1) return intervals
    intervals.sort((a,b) => a[0] - b[0])
    let answer = []
    let left = intervals[0][0], right = intervals[0][1]

    for(let i = 0; i <= lastIndex; i++){
        right = right > intervals[i][1] ? right : intervals[i][1] 
        if(i == lastIndex || right < intervals[i+1][0]){
            answer.push([left, right])
            left = i !== lastIndex ? intervals[i+1][0] : left
        }
    }
    
    return answer
}
