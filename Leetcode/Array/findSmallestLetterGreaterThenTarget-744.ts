/**
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 *
 */
function nextGreatestLetter(letters: string[], target: string): string {
	const setLetters: Set<string> = new Set()
	for (let i = 0; i < letters.length; i++) {
		const element = letters[i]
		setLetters.add(element)
	}
	const arrLetters: string[] = Array.from(setLetters)
	for (let i = 0; i < arrLetters.length; i++) {
		const letter = arrLetters[i]
		if (letter.charCodeAt(0) > target.charCodeAt(0)) return letter
	}
	return letters[0]
}
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'))
