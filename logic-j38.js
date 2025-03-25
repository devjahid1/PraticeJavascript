//1
function allEvenNumbers(arr) {
    return arr.every(num => num % 2 === 0);
}
console.log(allEvenNumbers([2, 4, 6]));
//2
function multiplyOddsByTwo(arr) {
    return arr.map(num => num % 2 !== 0 ? num * 2 : num);
}
console.log(multiplyOddsByTwo([1, 2, 3, 4, 5]));
//3
function checkForOddNumbers(arr) {
    return arr.some(num => num % 2 !== 0) ? "Odd numbers found" : "No odd numbers found";
}

console.log(checkForOddNumbers([2, 4, 6]));
//4
function oddNum(arr) {
    let sum = 0;
    let res = 0
    for (let num of arr) {
        if (num % 2 !== 0) {
            sum += num;
            res/= sum
         }
    }

    return res === 0 ? 0 : (sum / res).toFixed(2); 
}
console.log(oddNum([1, 2, 3, 4, 5])); 
//5
function subtractOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i] -= 1;
        }
    }
    return arr;
}

console.log(subtractOne([1, 2, 3, 4, 5])); 
