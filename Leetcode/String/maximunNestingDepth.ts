/**
 * https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
 * Ý tưởng: Tăng lên giảm xuống. Giữ giá trị cao nhất.
 */
 function maxDepth(strs: string): number {
    let tmp = 0,
        max = 0;
    for (let i = 0; i < strs.length; i++) {
        if(strs[i] === '('){
            max++;
        }else if(strs[i] === ')'){
            max--;
        }
        if(tmp < max){
            tmp = max;
        }
    }
    return tmp;
};
console.log("result: ",maxDepth("(())"));
