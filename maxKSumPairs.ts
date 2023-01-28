// O(nlogn) -> 100% T&S
// sol: https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/3108459/easy-one-pass-solution-beats-100-t-s/
function maxOperations(nums: number[], k: number): number {
    quickSort(nums)
    let left = 0, right = nums.length - 1, count = 0
    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum > k) right--
        else if(sum == k) left++,right--,count++
        else if(sum < k) left++
    }
    return count
}


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

function quickSort(items: number[], left: number = 0, right: number = items.length - 1): number[]{
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
