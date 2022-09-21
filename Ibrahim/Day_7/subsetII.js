/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    // length of the array
        const length = nums.length
    // parent array to push the new formed array
        let array = []
    //lop through the array while using slice() remove value start and end of the array
        for(let i=0; i <=length; i++) {
            array.push(nums.slice(i))
            for(let j=length; j>=0 ; --j){
                array.push(nums.slice(0,j))
            }
        }
    //convert to string for the set operation to work
         array = new Set(array.map(x => JSON.stringify(x)));
    // using spread operation to return it to array
         array = [...array]
    // to remove the double quote on the array
         array = array.map(x=> JSON.parse(x))
    // return the result
         return array   
    };