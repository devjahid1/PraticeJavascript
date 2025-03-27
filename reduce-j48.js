//1
const arr = [5, 10, 15, 20, 25];
const newArr = arr.reduce((acc, curr) => acc + curr);
//2
const names = [{name: 'Shampoo', price: 100}, {name: 'Soap', price: 50}, {name: 'Toothpaste', price: 75}];
const total = names.reduce((acc, curr) => acc + curr.price, 0);
console.log(total);
//3
const produce = [{name: 'pan', price: 5,}, {name:'book', price: 50}, {name: 'pencil', price: 100}];
const totalProduce = produce.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalProduce);
//4
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(sum);
//5
const number = [10, 20, 30, 40, 50];

const maxNumber = number.reduce((max, current) => {
    return current > max ? current : max;
}, number[0]);
console.log(maxNumber); 
//6
const number1 = [100, 200, 300, 400];

const sum1 = number1.reduce((total, current) => total + current, 50);

console.log(sum1); 