/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
	let maxWealth = 0
	for (let i = 0; i < accounts.length; i++) {
		let maxWealthForNow = 0
		for (let j = 0; j < accounts[i].length; j++) {
			maxWealthForNow += accounts[i][j]
		}
		if (maxWealthForNow > maxWealth) {
			maxWealth = maxWealthForNow
		}
	}
	return console.log(maxWealth)
};


let accounts = [[1, 2, 3], [3, 2, 1]]
maximumWealth(accounts)
