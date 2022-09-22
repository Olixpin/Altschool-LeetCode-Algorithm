/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    /*
    first, create a global result to hold the new arrays
    and also sort the nums
    */
    const finalArr = []
    nums.sort((a, b) => a - b)

    /*
    create a recursive function to help search,
    include, or exclude the ith value in the finalArr
    */
    const recursFunc = (i, nums, holder) => {

        /*
        check if i is equal to the length of the array
        */
        if (i === nums.length) {

            /*
            check what is in the holder if it is not
            duplicated, copy the elements there and 
            push to the finalArr
            */
           finalArr.push(holder.slice())
           return
        }
        // set the values not to be added to the holder
        recursFunc(i + 1, nums, holder)

        // set the values to be added to the holder
        holder.push(nums[i])
        recursFunc(i + 1, nums, holder)
        holder.pop()
    }

    /*
    call the recursive function to populate our finalArr
    and use a hash to filter out the result.
    */
    recursFunc(0, nums, [])

    const hash = {}
    for (let el of finalArr){
        if (hash[el]) continue
        hash[el] = el
    }

    // Get the values from the hash

    return Object.values(hash)

};