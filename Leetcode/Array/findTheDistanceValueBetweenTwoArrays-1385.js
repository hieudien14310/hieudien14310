"use strict";
/**
 * https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
 *
 */
function findTheDistanceValue(arr1, arr2, d) {
    let ans = 0;
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        let valid = true;
        for (let j = 0; j < arr2.length; j++) {
            const element2 = arr2[j];
            if (Math.abs(element - element2) <= d) {
                valid = false;
                break;
            }
        }
        if (valid)
            ans++;
    }
    return ans;
}
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6));
