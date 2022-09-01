// Write your JavaScript code here
function getHelloMessage(name) {
    if (name === "") {
        name = "World";
    }
    return `Hello, ${name}!`;
}

function capitalize(str) {
    return str.toUpperCase();
}

function getUserName() {
    const enteredName = prompt("What's your name?");
    return capitalize(enteredName);
}

function sayHello() {
    const userName = getUserName();
    const message = getHelloMessage(userName);
    console.log(message);
}

sayHello();