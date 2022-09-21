var merge = function(nums1, m, nums2, n){
  let first = m-1;
  let second= n-1;
  let i = m + n-1;
  
  while(second >=0){
      let valueOne = nums1[first];
      let valueTwo = nums2[second];
      
      if(valueOne > valueTwo){
          nums1[i] = valueOne;
          i--;
          first--;
      }else{
          nums1[i] = valueTwo;
          i--;
          second--;
      }
  }
};


