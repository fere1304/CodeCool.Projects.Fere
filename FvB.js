let server = "Server";
console.log(server);

function reverseString (str) {
    let splitString = str.split ("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join(""); 
    return joinString;

}
console.log(reverseString("Server"));

console.log(server.length);
console.log(server.length*3);
console.log(server.length/5);


