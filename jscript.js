// FreeCode Funcs
//1 JavaScript Essentials: functions are fun (and VIP) — if you understand them
//First function - Hello on a sunny day!
function sayHello(){ console.log("Hello on a sunny day!")
    return ("Hello on a sunny day")}
sayHello();
document.getElementById("bob1").innerHTML= sayHello();

//Second function - full name
function fullName(firstName, lastName) {
    console.log("fullname is: " + "Bob" + " " + "Cocksedge");
    return ("fullname will be: " + "Bob" + " " + "Cocksedge");
}
    fullName();
    document.getElementById("bob2").innerHTML= fullName();

//Third function - add 2 to a number
function add2(num) {
    return num + 2
}
const number = add2(8);   
console.log(number);
document.getElementById("bob3").innerHTML= "The number plus two is: " + number;

//Hoisting described here but discouraged 

//Fourth function - function expressions
const sayGoodbye= function() {
    console.log("This is declared with a function expression");
    return("This is a function expression declaration");
}
    sayGoodbye();
    document.getElementById("bob4").innerHTML= sayGoodbye();
    
// 2 JavaScript ES6 Functions: The Good Parts  
// 3 How to build reliable objects with factory functions in JavaScript 
// 4 Here are the new built-in methods and functions in JavaScript
