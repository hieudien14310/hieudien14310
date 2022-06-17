"use strict";
/**
 * https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
 *
 */
function busyStudent(startTime, endTime, queryTime) {
    let countS = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
            countS++;
        }
    }
    return countS;
}
;
console.log(busyStudent([1, 2, 3], [3, 2, 7], 1));
