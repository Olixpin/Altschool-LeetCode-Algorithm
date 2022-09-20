function twoSum(array, targetSum) {
	let NumObject = {}
	for (const number of array){
		let checkNum = targetSum - number
		if(checkNum in NumObject){
			return [checkNum, number]
		} else {
			NumObject[number] = true
		}
	}
	return [];
}


console.log(twoSum([1,9, 5, 3, 4], 6))

