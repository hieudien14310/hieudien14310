"use strict";
/**
 * https://leetcode.com/problems/find-the-difference/
 * Dùn phép toán XOR là để triệt tiêu các giá trị giống nhau
 */
function findTheDifference(s, t) {
    for (let i = 0; i < s.length; i++) {
        t = t.replace(s[i], '');
    }
    return t;
}
;
console.log(findTheDifference('ae', 'aea'));
