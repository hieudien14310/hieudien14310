/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 *
 */
function reverseWords(strs: string): string {
	const ans: string[] = strs.split(' ')
	for (let i = 0; i < ans.length; i++) {
		const element = ans[i].split('')
		let left = 0,
			right = element.length - 1
		while (left < right) {
			const tmp = element[left]
			element[left] = element[right]
			element[right] = tmp
			left++
			right--
		}
		ans[i] = element.join('')
	}

	return ans.join(' ')
}
console.log(reverseWords('God Ding'))
