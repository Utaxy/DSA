function twoSum(nums: number[], target: number): number[] {
	let map = new Map<number, number>()
	for (let i = 0; i < nums.length; i++) {
		let currentNum = nums[i]
		let complement = target - currentNum

		if (map.has(complement)) {
			return [map.get(complement)!, i]
		}
		else {
			map.set(currentNum, i)
		}
	}
	return []

};
let nums: number[] = [2, 7, 11, 15]

let target: number = 9


twoSum(nums, target)
