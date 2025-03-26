//1
const product ={name: "Laptop", price: 50000, brand: "Dell",}
const {name, price, brand= "Dell"} = product;
console.log(name);
//2
const item = {names: "Mobile", prices: "20000", phone: "Samsung"};
const {names, prices, phone} = item;
console.log(phone);
console.log(prices);
//3
const colors =["red", "Green", "Blue", "Yellow"];
const [a, b, c, d] = colors;
console.log(a);
console.log(b);
//4
const arr = [1, 2, 3];
const [ , second, ]=arr;
console.log(second);
//5
const digits = [2, 4, 6, 8]
const [two, , , eight] = digits;
console.log(two);
console.log(eight);
//6
function multiply(a,b){
    {return [a*3, b*3];}
}
 const [n1, n2] = multiply(2, 3);
    console.log(n1);
    console.log(n2);
//7
const person = {mnames: "Rahim", city: "Dhaka"}
const {mNames, city, phones= "N/A"} = person;
console.log(mNames);
console.log(city);
console.log(phones);
//8
const teacher = {tName: "Maria", Profession: "Teacher", job: "alias"};
const {tName, Profession, job} = teacher;
console.log(tName, Profession, job);




