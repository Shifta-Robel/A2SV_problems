// avg- nlogn, beats 100% time&memory
// sol- https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/3105341/simple-solution-beats-100-time-space-nlogn/
function minPairSum(nums: number[]): number {
    quickSort(nums, 0, nums.length -1);
    let maxSum = nums[0] + nums[nums.length - 1]; 
    for(let i = 1, j = nums.length - 2 ; i < nums.length / 2; i++, j--)
        nums[i] + nums[j] > maxSum && (maxSum = nums[i] + nums[j]) 
    return maxSum
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
