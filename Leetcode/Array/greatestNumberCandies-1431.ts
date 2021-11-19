/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 * 
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let greatest: number = Math.max(...candies);
    const result: boolean[] = candies.map((candy: number) => {
        const total = candy + extraCandies
        if(total >= greatest) return true;
        return false;
    })
    return result;
};
console.log(kidsWithCandies([12,1,12], 12));
