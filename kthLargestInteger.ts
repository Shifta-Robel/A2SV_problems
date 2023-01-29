function kthLargestNumber(nums: string[], k: number): string {
    return quickSort(nums.map((item)=>BigInt(item)))[nums.length - k] + ''
};

// handy quickSort
function partition(items: BigInt[], left: number, right: number): number {
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

function quickSort(items: BigInt[], left: number = 0, right: number = items.length - 1): BigInt[]{
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
