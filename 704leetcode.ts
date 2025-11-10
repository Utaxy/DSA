function search(nums: number[], target: number): number {
	let left: number = 0
	let right: number = nums.length - 1
	while (left <= right) {

		let middle: number = Math.floor((right + left) / 2)

		if (nums[middle] == target) {
			return middle
		} else if (nums[middle] < target) {
			left = middle + 1
		} else {
			right = middle - 1
		}



	}
	return -1

};


let nums = [2, 5], target = 5
console.log(search(nums, target))
