// Write the Frontend tasks here
let server = "Client";
console.log(server);

function reverseString(str) {
    let splitString = str.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join("");
    return joinString;
}
console.log(reverseString("Client"));

console.log(server.length*3);
console.log(server.length/5);