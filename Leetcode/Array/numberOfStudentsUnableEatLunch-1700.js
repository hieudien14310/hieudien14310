"use strict";
/**
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 *
 */
function countStudents(students, sandwiches) {
    while (true) {
        if (!students.includes(sandwiches[0]) || students.length === 0)
            break;
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
        }
        else {
            let first = students.shift();
            students.push(first);
        }
    }
    return students.length;
}
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
