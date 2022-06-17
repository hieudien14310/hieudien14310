"use strict";
/**
 * https://leetcode.com/problems/baseball-game/
 * @param ops
 */
function calPoints(ops) {
    const arrPoint = [];
    let point = 0;
    for (const op of ops) {
        if (op === 'C') {
            const last = arrPoint.pop();
            point -= last;
        }
        else if (op === 'D') {
            const value = arrPoint[arrPoint.length - 1] * 2;
            point += value;
            arrPoint.push(value);
        }
        else if (op === '+') {
            const value = arrPoint[arrPoint.length - 1] + arrPoint[arrPoint.length - 2];
            point += value;
            arrPoint.push(value);
        }
        else {
            point += +op;
            arrPoint.push(+op);
        }
    }
    return point;
}
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
