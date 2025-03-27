//1
const arr = [10, 34, 52, 63, 50, 99, 105, 102];
const newArr = arr.some(a => a > 100);
console.log(newArr);
//2
const number = [1, 2, 3, 4, 5];
const newNumber = number.every(n => n/5);
console.log(newNumber);
//3
const words = ['apple', 'banana', 'orange', 'grapes', 'mango', 'hello'];
const newWords = words.some(w => w === 'hello');
console.log(newWords);
//4
const ages = [12, 23, 19, 19];
const newAges = ages.every(a => a > 18);
console.log(newAges);

