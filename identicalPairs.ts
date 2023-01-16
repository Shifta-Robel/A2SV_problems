// Complexity : O(n)
function numIdenticalPairs(nums: number[]): number {
   let obj:Record<number,number> = {}
   let temp = 0
   for (let i = 0; i < nums.length; i++) {
     if(obj[nums[i]]) {
        temp += obj[nums[i]] 
        obj[nums[i]] += 1
     }
     else obj[nums[i]] = 1
   }
   return temp
};
