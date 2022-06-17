"use strict";
/**
 * https://leetcode.com/problems/defuse-the-bomb/
 */
function decrypt(code, k) {
    const result = new Array(code.length);
    if (k === 0)
        result.fill(0);
    for (let i = 0; i < code.length; i++) {
        const element = [...code];
        element.splice(i, 1);
        const splCircular = [...element, ...element].splice(i, Math.abs(k));
        result[i] = splCircular.reduce((a, b) => a + b, 0);
    }
    if (k < 0) {
        const numSplit = code.length - 1 + k;
        const tmp = result.splice(0, numSplit);
        result.push(...tmp);
    }
    return result;
}
console.log(decrypt([2, 4, 9, 4, 20, 1], -1));
