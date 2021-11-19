/**
 * https://leetcode.com/problems/goal-parser-interpretation/
 * 
 */
 var interpret = function(command: string): string {
    let result:string = command.split('()').join('o').split('(al)').join('al');
    return result;
};
console.log(interpret('(al)G(al)()()G'));