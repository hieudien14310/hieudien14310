/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 * 
 */
function removeDuplicates(s: string): string {
    let stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if(s[i] === stack[stack.length - 1]){
            stack.pop();
        }else {
            stack.push(s[i]);
        }     
    }
    return stack.join('');    
};
console.log(removeDuplicates('abbaca'));
