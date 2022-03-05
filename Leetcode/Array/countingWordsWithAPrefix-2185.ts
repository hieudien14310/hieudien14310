/**
 * https://leetcode.com/problems/counting-words-with-a-given-prefix/
 * @param words
 * @param pref
 */
function prefixCount(words: string[], pref: string): number {
	let count = 0
	for (const word of words) {
		const getTheFirstTwoCharacters = word.startsWith(pref)
		if (getTheFirstTwoCharacters) count++
	}
	return count
}
console.log(prefixCount(['pay', 'attention', 'practice', 'attend'], 'at'))
