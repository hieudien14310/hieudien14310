/**
 * https://leetcode.com/problems/robot-return-to-origin/
 * Bài toán đối xứng.
 */
function judgeCircle(moves: string): boolean {
    let count1: number = 0, 
        count2: number = 0;
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'L':
                count1--;
                break;
            case 'R':
                count1++;
                break;
            case 'U':
                count2--;
                break;
            case 'D':
                count2++;
                break;
            default:
                break;
        }
    }
    if(count1 === 0 && count2 === 0){
        return true;
    }
    return false;
};
console.log(judgeCircle("RRLLUUUDDD"));
