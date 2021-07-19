/**
 * https://leetcode.com/problems/custom-sort-string/
 */
function customSortString(order: string, str: string): string {
	type hmObj = { [key: string]: number }
	const hmStr: hmObj = {}
	const result: string[] = []
	const addLetter = (hmStr: hmObj, key: string, letters: string[]) => {
		if (hmStr[key]) {
			while (hmStr[key] > 0) {
				letters.push(key)
				hmStr[key]--
			}
		}
		if (hmStr[key] === 0) delete hmStr[key]
	}
	for (let i = 0; i < str.length; i++) {
		if (!hmStr[str[i]]) hmStr[str[i]] = 1
		else hmStr[str[i]]++
	}
	for (let j = 0; j < order.length; j++) {
		addLetter(hmStr, order[j], result)
	}
	const keys = Object.keys(hmStr)
	keys.forEach((key) => {
		addLetter(hmStr, key, result)
	})
	return result.join('')
}
console.log(customSortString('abdw', 'ooper'))
