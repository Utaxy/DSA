function isPalindrome(s: string): boolean {
	function isAlphaNumeric(char: string): boolean {
		const code = char.charCodeAt(0)

		const isNumber = (code >= 48 && code <= 57);
		const isUpperCase = (code >= 65 && code <= 90);
		const isLowerCase = (code >= 97 && code <= 122);

		return isNumber || isUpperCase || isLowerCase

	}
	let left = 0
	let right = s.length - 1

	while (left < right) {
		while (left < right && !isAlphaNumeric(s[left])) {
			left++

		}
		while (left < right && !isAlphaNumeric(s[right])) {
			right--
		}
		if (s[left].toLowerCase() !== s[right].toLowerCase()) {
			return false
		}
		left++
		right--
	}
	return true

};
let s = "A man, a plan, a canal: Panama"
isPalindrome(s)
