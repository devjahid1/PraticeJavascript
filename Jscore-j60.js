//1
function greet(call){
    console.log("Hello");
    call();
}
function hello(){
    console.log("Hello World");
}
greet(hello)
//2
function showObjectProperties(obj, callback) {
    for (let key in obj) {
      callback(key, obj[key]);
    }
  }
  const person = {
    name: "Jahid",
    age: 25,
    profession: "Developer"
  };
  showObjectProperties(person, function(key, value) {
    console.log(`${key}: ${value}`);
  });
//3
function numberProcessor(number, callback) {
    const result = number / 5;
    callback(result);
  }
  function displayResult(result) {
    console.log("Result after dividing by 5:", result);
  }
  numberProcessor(25, displayResult);
//4
function greetingHandler() {
    console.log("Hello");
  }
  function greeting() {
    console.log("Inside greeting");
    greetingHandler();
  }
  greeting();

