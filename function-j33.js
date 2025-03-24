//1 
function numbers (num){
    return num > 100 ? false : true
}
const num = numbers(100);
console.log(num);
//2
function divide(num){
    return num % 13 === 0 ? true : false
}
const div = divide(26)
console.log(div);
//3
function totalPrices(rice, curry, drinks){
    return rice + curry + drinks;
}
const totalPrice = totalPrices(20, 120, 60);
console.log(totalPrice);
//4
function age(ages){
    return ages >= 18 ? console.log("Eligible for Voting"): console.log("Not Eligible");
}
const currentAge = age(18);
//5
function length(str){
    return str.length
}
const str = length("Sylhet");
console.log(str);
//6
function avg(a, b, c, avg){
    return (a+b+c)/avg;
}
const average = avg(10,20,30, 3)
console.log(average);
//7
function checkNum(num){
    return num % 2 === 0 ? console.log("Positive") : console.log(num * -1);
}
const number = checkNum(21);