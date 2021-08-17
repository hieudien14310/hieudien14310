/**
 * https://leetcode.com/problems/maximum-product-of-word-lengths/
 * Tìm tích lớn nhất của 2 chuỗi trong mảng sao cho 2 chuỗi không có
 * trùng ký tự với nhau.
 */
function maxProductWordLength(words: string[]): number {
	let maxLength = 0
	for (let i = 0; i < words.length; i++) {
		/** Đánh dấu các ký tự xuất hiện */
		const map: { [key: string]: string } = {}
		for (const w of words[i]) map[w] = w

		for (let j = i + 1; j < words.length; j++) {
			const preW = words[j]
			let valid: boolean = true
			for (const pW of preW) {
				if (map[pW]) {
					valid = false
					break
				}
			}
			if (valid) {
				maxLength = Math.max(maxLength, words[i].length * preW.length)
			}
		}
	}
	return maxLength
}
console.log(
	maxProductWordLength([
		'eae',
		'ea',
		'aaf',
		'bda',
		'fcf',
		'dc',
		'ac',
		'ce',
		'cefde',
		'dabae',
	]),
)
