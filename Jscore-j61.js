//1
let taxRate = 15;
function calculateTax(income) {
    var tax = (income * taxRate) / 100;
    console.log("Tax amount:", tax);
}
calculateTax(20000);
//2
function secretHolder() {
    {
        let insideSecret = "internal secret hiding place";
        console.log("Inside block:", insideSecret);
    }
}
secretHolder();
//3
function checkTemperature() {
    if (true) {
        let temperature = 37;
        console.log("Inside if:", temperature);
    }
}
checkTemperature();
//4
function schoolDetails() {
    let schoolName = "Green Valley School";
    function displaySchoolName() {
        console.log("School Name:", schoolName);
    }
    displaySchoolName();
}
schoolDetails();