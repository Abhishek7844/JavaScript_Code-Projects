//ternary operator:
// Syntax : condition ? statement_1 : statement_2


// true ? 'Abhishek' : 'No_name';
// false ? 'Abhishek' : 'No_name';

console.log(5<2 ? '5 bada' : '2 chhota')
console.log(true ? 'Abhishek' : 'No_name')
console.log(false ? 'Abhishek' : 'India')


const prompt = require('prompt-sync')();

let gender = prompt("Enter your Gender : ");
let gen = gender.toUpperCase();

const result = `${gen === 'F' ? "She" : "He" } is a college student`; //don't think that he will run on all letter input
console.log(result)