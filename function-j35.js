//1
function odd(nums) {

    let sum = 0;
    for(let num of nums){
        if(num % 2 != 0){
            sum += num;
        }
    }
    return sum;
    }
    const allOdd = odd([5, 15, 8, 7]);
    console.log(allOdd);
//2
function smallestOfFirstTwo(numbers) {
    if (numbers.length < 2) {
        return "Array should have at least two elements";
    }
    return Math.min(numbers[0], numbers[1]);
}

console.log(smallestOfFirstTwo([20, 45, 78]));

//3
function deleteAge(age){
    if(age < 18){
        return 18;
    }else if(age > 45){
        return 45;
    }else{
       return age;
    }
}
console.log(deleteAge(10));
console.log(deleteAge(50));

//4
function sumOfDivisibleByFour(numbers) {
    let sum = 0;
    for (let num of numbers) {
        if (num % 4 === 0) {
            sum += num;
        }
    }
    return sum;
}
console.log(sumOfDivisibleByFour([2, 4, 5, 7, 8, 32, 45]));
//5
function processNumber(num) {
    if (num < 20) {
        return num * 2;
    } else {
        return num / 20;
    }
}

console.log(processNumber(10));
console.log(processNumber(40));
//6
function countNegativeNumbers(arr) {
    let count = 0;
    for (let num of arr) {
        if (num < 0) {
            count++;
        }
    }
    return count;
}
console.log(countNegativeNumbers([5, -2, -7, 8, 0, -4]));
//7
function divisibleByThree(arr) {
    let result = [];
    let res = 1;
    for (let num of arr) {
        if (num % 3 === 0) {
            result.push(num);
            res *= num;
        }
    }
    return result.length > 0 ? res: 0;
}
console.log(divisibleByThree([2, 3, 9, 12, 8, 15, 7])); 