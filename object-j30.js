//1
const headphone ={
    brand: "Sony",
    price: 3000,
    color: "red"
}
Object.freeze(headphone);
headphone.size= 21;
console.log(headphone);
//2
const player = {
     name: "Messi",
      goals: 800,
       club: "Inter Miami" 
    };
Object.freeze(player);
player.nationality = "Argentina"; 
console.log(player);
//3
const book = { 
    title: "Harry Potter",
    author: "JK Rowling", 
    pages: 500 
    };
    Object.seal(book);
    book.author = "Jahid"
    book.publisher = "Blo"
    console.log(book);
//4
const gadget = { name: "iPhone", price: 120000, color: "Black" };
delete gadget.price;
console.log(gadget);

//5
const animal = { name: "Tiger", location: "Sundarban" };
Object.freeze(animal);
delete animal.location;
console.log(animal); 
//6
const food = { name: "Pizza", price: 500, size: "Large" };
Object.seal(food.price)
food.price=510
Object.freeze(food);
food.toppings = "Cheese";
delete food.size;

console.log(food); 