function findMaxAverage(nums: number[], k: number): void {
	let sumAtm: number = 0

	for (let i = 0; i < k; i++) {
		sumAtm += nums[i]
	}

	let maxSum: number = sumAtm
	for (let i: number = k; i < nums.length; i++) {
		let exit: number = nums[i - k]
		let add: number = nums[i]

		maxSum = maxSum - exit + add
		if (maxSum > sumAtm) {
			sumAtm = maxSum

		}
	}


	return console.log(sumAtm / k)

};


let nums = [5]
let k = 1
findMaxAverage(nums, k)
