/**
 * https://leetcode.com/problems/find-common-characters/
 * 
 */
function commonChars(words: string[]): string[] {
    let first: any = words.shift();
    const result: string[] = [];
    for (let i = 0; i < first.length; i++) {
        const checkChar = words.filter(char => char.includes(first[i]))
        if(checkChar.length === words.length){
            result.push(first[i]);
            words = words.map(word => word.replace(first[i],''));
        }
    }
    return result;
};
console.log(commonChars(['aebc','cede', 'cwee']));
