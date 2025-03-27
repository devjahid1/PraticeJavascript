//1
const technologies = ["conditions", "array", "loop"];
const newAdd = ["variable", ...technologies];
console.log(newAdd);
//2
const myFruits =["Apple", "Banana", "Mango"];
const newFruit = [...myFruits, "papaya", "orange" ]
console.log(newFruit);
//3
const frontEnd = ["JavaScript"];
const backEnd = ["NodeJS"];;
const dataBase = ["MongoDB"];
const fullStack = [...frontEnd, ...backEnd, ...dataBase];
console.log(fullStack);
//4
const website ={name:"MySite", type:"e-commerce", status:"active"};
const newSite = {...website, theme:"dark"};
console.log(newSite);
//5
const young = {name: "arif", age: 30, country:"B Baria"}
const {country, ...newYoung} = young;
console.log(newYoung);
//6
const car = {make: "TOyota", model: "Corolla", year: 2020}
const updatedCar = {...car, year: 2032};
console.log(updatedCar);