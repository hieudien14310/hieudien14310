/**
 * https://leetcode.com/problems/valid-parentheses/
 * Ý tưởng: Push vô rồi pop ra
 * 
 */
function isValid(s: string): boolean {
    const objSymmetry = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const stack = [];
    const startS = ['(', '{', '['];
    for (const char of s) {
        if(startS.includes(char)){
           stack.push(objSymmetry[char]); 
        }else if(stack.pop() !== char){
            return false;
        }
    }
    if(stack.length === 0) return true;
    return false;
};
console.log(isValid("{[]}"));