// recursive practice 1
//
// let testStr = "test";
//
// function reverse(str) {
//     let currentStr = str;
//     let reversedStr = "";
//
//     if (currentStr.length === 0)
//         return reversedStr;
//     else
//         reversedStr += currentStr.slice(-1);
//         currentStr = currentStr.slice(0, -1);
//         return reversedStr + reverse(currentStr);
//
//
//
// }
//
// console.log(reverse(testStr))
//
// recursive practice 2

// let testNum = 5
//
// function numToList(num) {
//     if (num === 1){
//         return [1];
//     }
//     else {
//         let list = numToList(num-1);
//         list.push(num);
//         return list;
//
//     }
// }

// recursive practice 3

// let testNum = 5
//
// function Factorial (num) {
//     if (num === 1) {
//         return 1;
//     } else {
//         let finalNum = Factorial(num - 1);
//         finalNum = finalNum * num;
//         return finalNum;
//     }
//
// }
//
// console.log(Factorial(testNum))

// recursive practice 4

let testArr =[1, [2, [3, 4], 5], 6];
let newArr = [1, 2];

testArr.push(newArr);
console.log(testArr);




