//1 
function add(n1= 0, n2= 0, n3 = 0){
    return n1 + n2 + n3;
}
console.log(add(1, 2, 3));
//2
function deposit(n1 = 50){
    return n1;
}
console.log(deposit());
//3
function nameIncome(name = "anonymous", income = 0){
    return {name, income}
}
console.log(nameIncome("John", 1000));
//4
function square(num = 1){
    return num * num
}
console.log(square(4));
//5
function productInfo(name = "Unknown product", price = 1) {
    return { name, price };
}
console.log(productInfo("Laptop", 500));
//6
function favoriteBook(name = "JS book") {
    return name;
}
console.log(favoriteBook("Harry Potter"));
//7
function totalPrice(price = 10, quantity = 1) {
    return { total: price * quantity };
}
console.log(totalPrice(50, 2));
//8
function array(arr =[5, 10, 15]) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] * 2);
    }
    return res;
}
console.log(array([2, 4, 6])); 
//9
function simpleInterest(principal = 1000, rate = 5) {
    return principal * rate / 100;
}
console.log(simpleInterest(2000, 10, 2));
//10
function netSalary(salary = 50000, tax = 10) {
    return salary - (salary * tax / 100);
}
console.log(netSalary(60000, 15));