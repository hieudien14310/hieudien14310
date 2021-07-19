/**
 * https://leetcode.com/problems/flipping-an-image/
 *
 */
function flipAndInvertImage(image: number[][]): number[][] {
	for (let i = 0; i < image.length; i++) {
		image[i] = image[i].reverse().map((i) => (i === 0 ? 1 : 0))
	}
	return image
	// return image.map(ele => ele.reverse().map(i => i === 0 ? 1 : 0));
	type RequestType = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'OPTIONS' | 'CONNECT' | 'DELETE' | 'TRACE'
}
console.log(
	flipAndInvertImage([
		[1, 1, 0, 0],
		[1, 0, 0, 1],
		[0, 1, 1, 1],
		[1, 0, 1, 0],
	]),
)
