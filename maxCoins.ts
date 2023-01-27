// complexity : nlogn => beats 100% time&space
// sol: https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/3105073/simple-solution-beats-100-time-space/

function maxCoins(piles: number[]): number {
    quickSort(piles, 0, piles.length - 1);
    let sum = 0;
    for(let i = piles.length / 3; i < piles.length; i+=2){
        sum += (piles[i])
    }
    return sum   
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
