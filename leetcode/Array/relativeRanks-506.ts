/**
 * https://leetcode.com/problems/relative-ranks/
 *
 */
function findRelativeRanks(score: number[]): string[] {
	const answer: string[] = []
	const sortScore: number[] = [...score].sort((a, b) => b - a)
	const hmScore: { [key: string]: string } = {}
	for (let i = 0; i < sortScore.length; i++) {
		if (i === 0) hmScore[sortScore[i]] = 'Gold Medal'
		else if (i === 1) hmScore[sortScore[i]] = 'Silver Medal'
		else if (i === 2) hmScore[sortScore[i]] = 'Bronze Medal'
		else hmScore[sortScore[i]] = `${i + 1}`
	}

	for (let j = 0; j < score.length; j++) {
		answer.push(hmScore[score[j]])
	}
	return answer
}
console.log(findRelativeRanks([10, 3, 8, 9, 4]))
