/**
 * https://leetcode.com/problems/string-matching-in-an-array/
 * 
 */
function stringMatching(words: string[]): string[] {
    let i: number = 0;
    let result: string[] = [];
    while (i < words.length) {
        const arrRemovedItself = words.filter(j => j !== words[i]);
        for (let j = 0; j < arrRemovedItself.length; j++) {
            if(words[i].includes(arrRemovedItself[j])){
                result.push(arrRemovedItself[j]);
            }
        }
        i++;
    }
    return [...new Set(result)];
};
console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"]));
