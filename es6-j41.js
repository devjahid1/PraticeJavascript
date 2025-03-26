//1
const array = (arr)=>{
    return arr[0];
}
console.log(array([10, 20, 30]));

//2
const num = (n1, n2, n3)=>{
    return n1 + n2 + n3;
}
console.log(num(10, 20, 30));

//3
const parameter = (param = "unknown") =>{
    return param;
}
console.log(parameter());
//4
const amounts = (name, amount) =>{
    return `name: ${name} ,  ${amount/5}`
}
console.log(amounts("John", 100));
//5
const sum = arr =>{
    return arr[0] + arr[arr.length-1];
}
console.log(sum([10, 20, 30]));
//6
const add = (a = 10, b = 5) => {
    return a + b;
};
console.log(add(5, 5));  