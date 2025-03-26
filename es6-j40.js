//1
const num1 = 100;
const num2 = 20;
console.log(`THe difference between ${num1} is ${num2} is ${num1 - num2}`);
//2
const employee ={
    name: "John ",
    age: 30,
    salary: 50000
};
console.log(`Name: ${employee.name} Age: ${employee.age} Salary: ${employee.salary}`);
//3
const fruits = ['Apple', 'Banana', 'Orange'];
console.log(`Fruit: ${fruits}`);
//4
const a = 50;
const b = 10;
console.log(`The division of a and b is ${a / b}`);
//5
const person = { firstName: "Amit", lastName: "Kumar" };
console.log(`Full Name: ${person.firstName} ${person.lastName}`);
//6
const animals = ["Cat", "Dog", "Elephant"];

console.log(`My favorite animals are ${animals}`);
//7
const student={
    name: "John",
    age: 22,
    marks:[80, 85, 90]  
};

const totalMarks = student.marks[0]+student.marks[1]+student.marks[2];
const avg = totalMarks/3;

console.log(`Name: ${student.name} Age: ${student.age} Marks: ${avg}`);

