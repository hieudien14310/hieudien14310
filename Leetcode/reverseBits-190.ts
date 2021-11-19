/**
 * https://leetcode.com/problems/reverse-bits/
 *
 */
function reverseBits(n: number): number {
	const binary = Number(n)
		.toString(2)
		.padStart(32, '0')
		.split('')
		.reverse()
		.join('')
	return parseInt(binary, 2)
}
console.log(reverseBits(0b00000010100101000001111010011100))
