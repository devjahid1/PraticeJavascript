//1
const product = { name: "Laptop", price: 50000, brand: "Dell"};
const {name ,...details} = product;
console.log(details);
//2
const project = {id: 101, title: "Web App", budget: 3000, client:"Tech Corp"};
const {title, ...restProject} = project;
console.log(restProject);
//3
const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React" 
};
const { language, specialty, ...detail } = programmer;
console.log(language);
console.log(specialty); 
console.log(detail); 
//4
const numbers = [10, 20, 3, 30, 300, 3000];
const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);
//5
function sum(a, b, ...rest) {
    let total = a + b;
    for (let num of rest) {
        total += num;
    }
    return total;
}
console.log(sum(10, 20, 3, 30, 300, 3000));
//6
function storeAndSum(...values) {
    let total = 0;
    for (let num of values) {
        total += num;
    }
    return total;
}
console.log(storeAndSum(10, 20, 3, 30, 300, 3000));
