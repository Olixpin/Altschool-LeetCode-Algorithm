var nums =[1, 5, 5, 6, 7, 12, 27]

var removeDuplicates= function (nums) {
  let sort = 0;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] !== nums[i-1]){
      nums[sort] = nums[i];
      sort++;
     }
  }  
  return sort;
};
