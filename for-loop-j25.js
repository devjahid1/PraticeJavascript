//1
for(let i = 20; i<= 50; i++){
    if(i % 7 === 0){
        console.log(i);
    }
}
//2
for(i = 40; i <= 80; i++){
    if(i % 5 === 0 && i % 7 ===0){
        console.log(i);
    }
}
//3
let sum = 13;
for(let i = 1; i <= 40; i++){
    if(i % 13 === 0){
        sum += 1;
    }
}
console.log(sum);
//4
for(i = 1; i<=50; i+=4){
    console.log(i);
}
//5
for(let i = 0; i<=100; i++){
    if(i % 9 === 0 && i % 6 === 0){
        console.log(i);
        
    }
}
//6
let sum34 = 0;
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 4 === 0){
        console.log(i);
        sum34+= i;
        
    }
}
console.log(sum34);

