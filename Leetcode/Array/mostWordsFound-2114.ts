/**
 * https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
 *
 * @param sentences
 */
function mostWordsFound(sentences: string[]): number {
	let maximum = 0
	for (const sentence of sentences) {
		const length = sentence.split(' ').length
		if (maximum < length) maximum = length
	}
	return maximum
}
console.log(`mostWordsFound`, mostWordsFound(['please wait', 'continue to fight', 'continue to win']))
