//1
const book = {
    writer: "Humayun Azad",
    price: 250
}
console.log(Object.keys(book), Object.values(book));
//2
const article = {
    title: "Learning JS",
    category: "Programming"
}
const articleKeys = Object.keys(article);
console.log(articleKeys.includes("author"));
//3
const laptop ={
    brand: "Dell",
    model: "Inspiron",
    price: 45000
}
for(const item in laptop){
    console.log(item);
}
//4
const phone ={
    brand: "Samsung",
    model: "Galaxy S21",
    price: 85000
}
for(const key of Object.keys(phone)){
    console.log(key+  ":" + phone[key]);
}
//5
const bike = {
    brand: "Hero",
    price: 120000,
    model: "Splendor"
}
console.log(Object.values(bike));
//6
const books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of Thrones"
}
for(const key in books){
    console.log(books[key]);
}
//7
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
let sum = 0
for(const num in numbers){
    sum+=numbers[num]
}
console.log(sum);
//8
const player ={
    name: "Messi",
    team: "Argentina",
    goals: 9
}
console.log(Object.values(player));
//9
const building ={
    floors: 10,
    address:{
        street: "Main Road",
        city: "Dhaka",
        type: "Commercial"
    }
}
for (const key in building) {
    if (typeof building[key] === "object") {
        console.log(key + ":");
        for (const subKey in building[key]) {
            console.log(subKey + ": " + building[key][subKey]);
        }
    } else {
        console.log(key + ": " + building[key]);
    }
}



