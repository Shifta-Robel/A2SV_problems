// complexity: O(nlogn), beats 100% mem
// sol: https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/3106647/intuitive-solution-beats-100-mem-o-nlogn/
function minSetSize(arr: number[]): number {
    quickSort(arr, 0, arr.length -1)
    let freq: number[] = []
    for(let i = 0; i < arr.length - 1; i++){
        if(i == 0 || arr[i] != arr[i+1]) freq.push(1);
        if(arr[i] == arr[i+1]) freq[freq.length -1] += 1;
    }
    quickSort(freq, 0, freq.length -1)
    let sum = 0, count = 0;
    for(let i = freq.length - 1; i >= 0; i--){
        count++,sum += freq[i]
        if(sum >= arr.length/2) break;
    }
    return count;
};

// quickSort
function partition(items: number[], left: number, right: number): number {
    let pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            let temp = items[j]
            items[j] = items[i]
            items[i] = temp
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items: number[], left: number, right: number): number[]{
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
