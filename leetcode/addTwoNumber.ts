// https://leetcode.com/problems/add-two-numbers/
function addTwoNumber(list1: number[], list2: number[]) {
    console.log(typeof list1);
    let stringList1AfterReversed: string = '';
    let stringList2AfterReversed: string = '';
    for (let index = 1; index <= list1.length; index++) {
        stringList1AfterReversed += list1[list1.length - index];
    }
    for (let index = 1; index <= list2.length; index++) {
        stringList2AfterReversed += list2[list2.length - index];
    }
    const total2String = parseInt(stringList1AfterReversed) + parseInt(stringList2AfterReversed);
    const arrayTotal2String: any = total2String.toString().match(/[0-9]/gi);
    const result: number[] = [];
    for (let i = 1; i <= arrayTotal2String.length; i++) {
        result.push(parseInt(arrayTotal2String[arrayTotal2String.length - i]));
    }
    return result;
}
const result = addTwoNumber([123], [1222]);
console.log(result);
