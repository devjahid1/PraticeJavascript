//1
const arr = [30, 45, 20, 60, 10];
const newArr = arr.map(a => a + 13);
console.log(newArr);
//2
const name = ["Messi", "Maradona", "pele", "Zidane", "Ronaldo"];
const newName = name.filter(n => n.length > 5);
console.log(newName);
//3
let numbers2 = [10, 15, 20, 25, 30, 35];
let greaterThan20 = numbers2.filter(num => num > 20);
console.log(greaterThan20);
//4
let numbers = [65, 70, 68, 72, 68, 73];
let evenNumbers = numbers.filter(num => num > 69);
console.log(evenNumbers);
//5
const number = [7, 10, 15, 20, 25, 30];
const newNumber = number.map(n => n / 3)
console.log(newNumber);
//6
const name2 = ['leonardo', 'Brad pitt', 'kare Winslet', 'Audrey Hepburn', 'Johnny Depp']; 
const newName2 = name2.map(n => n[2]);
console.log(newName2);
//7
let names3 = ['Tom', 'Harry', 'Sam', 'Jack'];
let hNames = names3.find(names => names[0]===('H'));
console.log(hNames);
//8
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach(num => console.log(num));
//9
let animals = ['cow', 'goat', 'sheep', 'horse'];
animals.forEach(animal => console.log(animal));
