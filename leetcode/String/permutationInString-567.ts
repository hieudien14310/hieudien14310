/**
 * https://leetcode.com/problems/permutation-in-string/
 *
 */
function checkInclusion(s1: string, s2: string): boolean {
	const result: string[] = []
	const permutations = (strs: string, l: number, r: number) => {
		const swap = (strs: string, i: number, j: number): string => {
			const splStrs = strs.split('')
			let tmp = splStrs[i]
			splStrs[i] = splStrs[j]
			splStrs[j] = tmp
			return splStrs.join('')
		}
		if (l === r) {
			result.push(strs)
		} else {
			for (let i = l; i <= r; i++) {
				strs = swap(strs, l, i)
				permutations(strs, l + 1, r)
				strs = swap(strs, l, i)
			}
		}
	}
	permutations(s1, 0, s1.length - 1)
	for (let i = 0; i < result.length; i++) {
		const element = result[i]
		if (s2.includes(element)) return true
	}
	return false
}
console.log(checkInclusion('properties', 'properties'))
