//1
const fruits = ["আপেল", "কলা", "আম", "লিচু"];
if (fruits.includes("আম")) {
    console.log("আম আছে");
} else {
    console.log("আম নেই");
}
//2
const names = ["বাবুল", "রকিব", "হোসেন"];
console.log(names.indexOf('বাবুল'));
//3
const friends = ["রিমন", "রাজিব", "রিফাত"];
console.log(friends.indexOf("রিফাত"));
//4
const city = ["Dhaka", "Chittagong", "Sylhet"];
city.push("rajshahi");
console.log(city.includes("Rajshahi"));
//5
const keywords = ["দীঘি", "মেঘ", "বৃষ্টি", "বর্ষা"];
if(keywords.includes("বৃষ্টি")){
    console.log("I need Unberalla");
}
else{
    console.log("no rain no pain");
    
}
//6
const sports = ["ফুটবল", "হকি", "ভলিবল"];
console.log(sports.includes("ব্যাডমিন্টন"));




