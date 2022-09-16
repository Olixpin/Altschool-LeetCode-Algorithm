function twoSum(array, target){
    const hashMap = {}
    for(let i=0; i < array.length; i++){
        let possibleAns = target - array[i];
        if (possibleAns in hashMap)
        return [hashMap[possibleAns], i]
        hashMap[array[i]] = i;
    }
}
console.log(twoSum([3,2,4], 6));


