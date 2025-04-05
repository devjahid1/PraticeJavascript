//1
if(true == 1){
    console.log("same");
}else{
    console.log("different");
}
//2
let obj1 = {}
let obj2 = {}
console.log(obj1 === obj2);//JavaScript-এ অবজেক্ট তুলনা হলে তাদের মেমোরি রেফারেন্স চেক করা হয়, মান চেক করা হয় না।
//3
let arr1 = [1,2,3,4,5];
let arr2 = arr1;
console.log(arr1 === arr2);
//4
function check(num, bol){
    console.log(num == bol);
}
check(1, true);
check(0, false);
//5
let str = "";
let bol = false;
console.log(str == bol);
//6
console.log(null == undefined);
//7
console.log(1 == "1");//যদি একপাশের নাম্বার এবং স্ট্রিং থাকে, সেই স্ট্রিংকে নাম্বারে কনভার্ট করে। তারপর টু ডাবল ইকুয়াল টু কম্পেয়ার করবে। 

