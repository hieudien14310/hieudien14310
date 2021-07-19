/**
 * https://leetcode.com/problems/determine-color-of-a-chessboard-square/
 * Ý tưởng: Cộng trục x và trục y với nhau. Kiểm tra là số chẵn hay số lẻ.
 * Nhớ:
 *  Lẻ + lẻ = chẵn
 *  Chẵn + chắn = chẵn
 *  Lẻ + chẵn = lẻ.
 */
function squareIsWhite(coordinates: string): boolean {
    const totalCharCode = coordinates.charCodeAt(0) + coordinates.charCodeAt(1);
    if(totalCharCode % 2 === 0){
        return false;
    }
    return true;
};
console.log(squareIsWhite('c7'));
