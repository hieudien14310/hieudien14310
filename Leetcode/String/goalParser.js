"use strict";
/**
 * https://leetcode.com/problems/goal-parser-interpretation/
 *
 */
var interpret = function (command) {
    let result = command.split('()').join('o').split('(al)').join('al');
    return result;
};
console.log(interpret('(al)G(al)()()G'));
