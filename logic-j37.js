//1
function income(amount) {
    if (amount <= 50000) {
        return 10;
    } else if (amount <= 100000) {
        return 20;
    } else if (amount <= 200000) {
        return 30;
    } else {
        return 40;
    }
}
console.log(income(5000));
//2
function deliveryCharge(weight) {
    if (weight < 10) {
        return 100;
    } else if (weight < 20) {
        return 300;
    } else if (weight < 50) {
        return 1000;
    } else {
        return weight * 100;
    }
}
console.log(deliveryCharge(8)); 
//3
function getGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "F";
    }
}
console.log(getGrade(85));