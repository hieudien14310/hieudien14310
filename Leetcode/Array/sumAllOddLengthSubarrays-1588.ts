/**
 * https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 * 
 */
function sumOddLengthSubarrays(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        if(i % 2 !== 0){
            for (let j = 0; j + i <= arr.length; j++) {
                const subArray = arr.slice(j, j +i);
                sum += subArray.reduce((a,b) => a + b, 0)
            }
        }
    }
    return sum;
};
console.log(sumOddLengthSubarrays([1,2,3]));
