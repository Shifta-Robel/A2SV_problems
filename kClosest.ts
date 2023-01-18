function kClosest(points: number[][], k: number): number[][] {
    points.forEach(
        (item, index) => points[index].push( Math.sqrt(Math.pow(item[0],2) + Math.pow(item[1],2)))
    )
    points = mergeSort(points)
    let ans = []
    for(let i = 0 ; i < k; i++) ans.push([points[i][0], points[i][1]])
    return ans
};

function mergeSort(arr: number[][]): number[][]{
    if(arr.length <= 1) return arr;
    let p = arr.length / 2
    let left = mergeSort(arr.slice(0, p))
    let right = mergeSort(arr.slice(p))
    let merged = []
    while(left.length && right.length)
        merged.push( left[0][2] < right[0][2] ? left.shift() : right.shift())
    merged = [...merged, ...left, ...right]
    return merged
}
