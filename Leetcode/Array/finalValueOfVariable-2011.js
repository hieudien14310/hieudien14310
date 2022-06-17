"use strict";
/**
 * https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
 * @param operations
 */
function finalValueAfterOperations(operations) {
    let X = 0;
    // for (const operation of operations) {
    // 	if (operation === 'X++' || operation === '++X') X++
    // 	else X--
    // }
    operations.forEach((operation) => eval(operation));
    return X;
}
console.log('finalValueAfterOperations', finalValueAfterOperations(['X++', '++X', '--X', 'X--', 'X++', 'X++']));
