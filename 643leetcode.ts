function findMaxAverage(nums: number[], k: number): void {
	let sumAtm: number = 0

	for (let i = 0; i < k; i++) {
		sumAtm += nums[i]
	}

	let maxSum: number = sumAtm
	for (let i: number = k; i < nums.length; i++) {
		let exit: number = nums[i - k]
		let add: number = nums[i]

		sumAtm = sumAtm - exit + add
		maxSum = Math.max(maxSum, sumAtm)
	}


	return console.log(maxSum / k)

};


let nums = [1, 12, -5, -6, 50, 3]
let k = 4
findMaxAverage(nums, k)
