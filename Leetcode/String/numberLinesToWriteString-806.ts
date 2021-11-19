/**
 * https://leetcode.com/problems/number-of-lines-to-write-string/
 * 
 */
function numberOfLines(widths: number[], s: string): number[] {
    let [lines, widthLastLine]: number[] = [0, 0];
    for (let i = 0; i < s.length; i++) {
        let count = widths[s[i].charCodeAt(0) - 97]
        if(widthLastLine + count > 100){
            widthLastLine = count;
            lines++;
        }else {
            widthLastLine += count;
        }
    }
    return [lines + 1, widthLastLine];
};
console.log(numberOfLines(
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 
    'abcdefghijklmnopqrstuvwxyz')
);
