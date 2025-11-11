function containsDuplicate(nums: number[]): boolean {
	let numList = new Set<number>()
	for (let i: number = 0; i < nums.length; i++) {

		if (numList.has(nums[i])) {
			return true
		}
		numList.add(nums[i])


	}
	return false

}



let numls: number[] = [1, 2, 3, 1]

containsDuplicate(numls)
