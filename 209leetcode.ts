function minSubArrayLen(target: number, nums: number[]): number {
	let left: number = 0
	let sumAtm: number = 0
	let minLength: number = Infinity


	for (let right: number = 0; right < nums.length; right++) {
		sumAtm += nums[right]

		while (sumAtm >= target) {

			minLength = Math.min((right - left + 1), minLength)
			sumAtm -= nums[left]
			left++
		}
	}
	return minLength === Infinity ? 0 : minLength


};


let nums = [2, 3, 1, 2, 4, 3], target = 7
minSubArrayLen(target, nums)
