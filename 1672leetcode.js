/**
 * @param {number[]} nums
.../**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
	let newArr = []
	let newSum = 0

	for (let i = 0; i < nums.length; i++) {
		newSum += nums[i]
		newArr.push(newSum)
	}
	return newArr;
};


const nums = [1, 2, 3, 4]
console.log(runningSum(nums))
