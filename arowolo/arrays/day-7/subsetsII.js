/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    let prevIndex = 0;
   nums.sort((a,b)=>a-b);
   
   let res = [[]];
   for (let i=0;i<nums.length;i++) {    
       let l = res.length;
       for (let j=prevIndex;j<l;j++) res.push([...res[j], nums[i]]);
       if (nums[i+1] == nums[i]) prevIndex = l;
       else prevIndex = 0;
   }
   
   return res;
   
};