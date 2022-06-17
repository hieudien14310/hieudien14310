"use strict";
/**
 * https://leetcode.com/problems/add-to-array-form-of-integer/
 *
 */
function addToArrayForm(num, k) {
    const stringK = k.toString();
    const ans = new Array(Math.max(num.length, stringK.length) + 1).fill(0);
    for (let i = 0; i < stringK.length; i++) {
        ans[ans.length - i - 1] = parseInt(stringK[stringK.length - i - 1]);
    }
    for (let j = 0; j < ans.length; j++) {
        const lastIndex = ans.length - j - 1;
        ans[lastIndex] = ans[lastIndex] + (num[num.length - j - 1] || 0);
        if (ans[lastIndex] >= 10) {
            ans[lastIndex] = ans[lastIndex] % 10;
            ans[lastIndex - 1]++;
        }
    }
    if (ans[0] === 0)
        ans.shift();
    return ans;
}
console.log(addToArrayForm([0], 10000));
