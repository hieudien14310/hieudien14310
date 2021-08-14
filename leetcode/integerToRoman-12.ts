/**
 * https://leetcode.com/problems/integer-to-roman/
 *
 */
function intToRoman(num: number): string {
	let ans: string = ''
	const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
	const roman = [
		'M',
		'CM',
		'D',
		'CD',
		'C',
		'XC',
		'L',
		'XL',
		'X',
		'IX',
		'V',
		'IV',
		'I',
	]
	for (let i = 0; 0 < num; i++) {
		while (num >= value[i]) {
			ans += roman[i]
			num -= value[i]
		}
	}
	return ans
}
console.log(intToRoman(153))
