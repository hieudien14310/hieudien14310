"use strict";
/**
 * https://leetcode.com/problems/flipping-an-image/
 *
 */
function flipAndInvertImage(image) {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse().map((i) => (i === 0 ? 1 : 0));
    }
    return image;
}
console.log(flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
]));
