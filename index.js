const prompt = require("prompt-sync")({ sigint: true });

let a = parseInt(prompt("Enter your first number : "))
let b = prompt("Enter your operator number : ")
let c = parseInt(prompt("Enter your second number : "))
r = Math.random()
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


