const prompt = require('prompt-sync')();

let age = prompt("What is yr age: ");

//condition ? "excution1" : "excution2"

console.log("You can ", age<18 ? "not drive" : "drive");