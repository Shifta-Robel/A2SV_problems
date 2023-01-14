/**
 *
 * select
 * @param {number[]} arr
 * @param {number} i
 * @return {number}
 *
 * selectionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution
{
  select(arr,i){
     // code here such that selectionSort() sorts arr[]
    let min = i
	  arr.forEach( (item, indx) => indx >= i && arr[indx] < arr[min] && (min = indx))
	  return min
  }
  
  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
   //code here
   arr.forEach((item, i) => {
		let minIdx = this.select(arr, i)
		if( i === minIdx) return;
		arr[i] +=  arr[minIdx];
		arr[minIdx] = arr[i] - arr[minIdx];
		arr[i] = arr[i] - arr[minIdx];
	})
	return arr
	}
    
}
