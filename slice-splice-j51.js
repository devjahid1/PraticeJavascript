const fruit = ['apple', 'banana', 'cherry', 'date'];
const removed = fruit.slice(1, 3);
console.log(fruit);
console.log(removed);
//2
const cars = ['Tesla', 'BMW', 'Toyota', 'Ford'];
const removedCars = cars.slice(0, 2);
console.log(cars);
console.log(removedCars);
//3
const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar'];
const removedMovies = movieList.splice(2 ,2,"Batman", "Superman");
console.log(removedMovies);
console.log(movieList);
//4
const players = ["Messi", "Ronaldo", "Neymar", "Mbappe"];
players.splice(2, 1, "Haaland");  
console.log(players);  


