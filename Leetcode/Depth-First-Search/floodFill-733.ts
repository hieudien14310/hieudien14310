/**
 * https://leetcode.com/problems/flood-fill/
 *
 * @param image
 * @param sr
 * @param sc
 * @param newColor
 */
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
	const dfs = (image: number[][], sr: number, sc: number, color: number, newColor: number): void => {
		if (image[sr][sc] === color) {
			image[sr][sc] = newColor
			if (sr >= 1) dfs(image, sr - 1, sc, color, newColor)
			if (sc >= 1) dfs(image, sr, sc - 1, color, newColor)
			if (sr + 1 < image.length) dfs(image, sr + 1, sc, color, newColor)
			if (sc + 1 < image[0].length) dfs(image, sr, sc + 1, color, newColor)
		}
	}
	const color = image[sr][sc]
	if (color !== newColor) {
		dfs(image, sr, sc, color, newColor)
	}
	return image
}
const matrix = floodFill(
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	0,
	0,
	2,
)
for (let i = 0; i < matrix.length; i++) {
	console.log(matrix[i])
}
