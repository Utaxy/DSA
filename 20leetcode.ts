function isValid(s: string): boolean {

	const map = new Map<string, string>([
		["}", "{"],
		[")", "("],
		["]", "["]

	])
	let stack: string[] = []

	for (const char of s) {
		if (char === "(" || char === "[" || char === "{") {
			stack.push(char)
		}
		else if (map.has(char)) {
			if (stack.length === 0) {
				return false
			}
			let lastElement = stack.pop()
			if (lastElement !== map.get(char)) {
				return false
			}
		}

	}
	return stack.length === 0 ? true : false
}


const c = "()[]{}"
isValid(c)
