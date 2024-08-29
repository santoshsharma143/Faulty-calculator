const prompt = require("prompt-sync")({ sigint: true }); //This line is to use input method in node.js

let a = parseInt(prompt("Enter your first number : ")) //Taking input form user 
let b = prompt("Enter your operator number : ")
let c = parseInt(prompt("Enter your second number : "))

r = Math.random()  //Creating a random number for making 25% wrong operation

//The random number generate number between 0 to 1 therefore we check the random number with 0.25
if (r > 0.25 == true) { 
    if (b == "+") {

        console.log(a + c);
    }
    else if (b == "-") {
        console.log(a - c);
    }
    else if (b == "*") {
        console.log(a * c);
    }
    else if (b == "/") {
        console.log(a / c);
    }
    else {
        console.log("invalid operator")
    }
}
else {
    if (b == "+") {

        console.log(a - c);
    }
    else if (b == "-") {
        console.log(a / c);
    }
    else if (b == "*") {
        console.log(a + c);
    }
    else if (b == "/") {
        console.log(a ** c);
    }
    else {
        console.log("invalid operator")
    }

}


