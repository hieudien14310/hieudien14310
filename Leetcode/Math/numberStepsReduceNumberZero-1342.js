"use strict";
/**
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 */
function numberOfSteps(num) {
    let steps = 0;
    while (num > 0) {
        let even = num % 2;
        if (even === 0) {
            num = num / 2;
        }
        else {
            num = num - 1;
        }
        steps++;
    }
    return steps;
}
console.log(numberOfSteps(123));
