//1
const numbers = [50, 12, 25, 8, 15];
numbers.sort((a, b) => a - b);
console.log(numbers);
//2
const num = [13, 2, 5, 9, 6];
num.sort((a, b) => b - a);
console.log(num);
//3
const friends = [{ name: 'Ali', age: 29 },{ name: 'Sara', age: 22 },{ name: 'Tariq', age: 35 }
];
friends.sort((a, b) => a.age - b.age);
console.log(friends);
//4
const names = ['nabil', 'zubayer', 'sarwar', 'delwar'];
names.sort();
console.log(names);
