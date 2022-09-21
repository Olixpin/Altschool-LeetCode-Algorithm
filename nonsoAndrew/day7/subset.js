/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = (nums) => {
	nums.sort((a, b) => a - b);
	const result = [];
	subsetsUtils(0, []);
	return result;
	function subsetsUtils(index, array) {
		result.push([...array]);
		for (let i = index; i < nums.length; i++) {
			if (i > index && nums[i] == nums[i - 1]) {
				continue;
			}
			array.push(nums[i]);
			subsetsUtils(i + 1, array);
			array.pop();
		}
	}
};
