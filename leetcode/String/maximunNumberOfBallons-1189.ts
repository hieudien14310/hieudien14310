/**
 * https://leetcode.com/problems/maximum-number-of-balloons/
 * 
 */
function maxNumberOfBalloons(text: string): number {
    const [ validLetters, validLetters2, validLetters3, validLetters5, validLetters6 ]: any[] = [[], [], [], [], []];
    for (let i = 0; i < text.length; i++) {
        if(text[i] === 'b') validLetters.push('b');
        if(text[i] === 'a') validLetters2.push('a');
        if(text[i] === 'l') validLetters3.push('l');
        if(text[i] === 'o') validLetters5.push('o');
        if(text[i] === 'n') validLetters6.push('n');        
    }
    if( validLetters.length &&
        validLetters2.length &&
        validLetters3.length &&
        validLetters5.length &&
        validLetters6.length
    ){
        return Math.min( 
            validLetters.length,
            validLetters2.length,
            Math.floor(validLetters3.length / 2),
            Math.floor(validLetters5.length / 2),
            validLetters6.length,
        );
    }
    return 0;
};
console.log(maxNumberOfBalloons("balllllllllllloooooooooon"));
