//1
function arra(arr){
    return arr.length
}
console.log(arra([1,2,3,4,5,6,7,8,9,10]));
//2
function startR(name){
    return name[0];
}
console.log(startR("Raju"));
//3
function number(num){
    if(num > 10){
        console.log(num /10);
    }else if(num < 10){
        console.log(num * 10);
    }else{
        console.log("number is 10");
        
    }
}
number(9);
//4
function add(arr){
    return arr[0] + arr[1];
}
console.log(add([1,2,3,4,5]));
//5
function num(n){
    if(n % 2 == 0){
        console.log(n*n);
        
    }else{
        console.log(n*n*n);
    }
}
num(3);
//6
function str(a, b){
    if(a.length > b.length){
        return true
    }else if(a.length < b.length){
        return false
    }else{
        console.log("Both are equal");
    }
}
console.log(str("Raju", "Raj"));
//7
function checkAndHalf(num) {
    return num > 100 ? num / 2 : num;
}
console.log(checkAndHalf(150));
