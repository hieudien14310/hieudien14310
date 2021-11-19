/**
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/
 * 
 */
function uncommonFromSentences(s1: string, s2: string): string[] {
    type HEHE = {[key: string]: any}
    const arr = s1.split(' ').concat(s2.split(' '));
    const obj: HEHE = {};
    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]){
            obj[arr[i]] = -1;
        }else {
            obj[arr[i]] = 1;
        }
    }
    const stack: string[] = [];
    Object.keys(obj).forEach(key => {
        if(obj[key] === -1) stack.push(key);
    })
    return stack;
};

console.log(uncommonFromSentences("this apple is sweet", "sour"));
