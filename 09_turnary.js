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

const result = `${gender.toUpperCase() === 'F' ? "She" : "He" } is a college student`;

//don't think abt that he will run on all letter input

console.log(result)


// Mind-blowing facts of Ternary oprtr:

//const res1 = '' ? 'James 1' : '' ? 'James 2' : "Johnson 2"
const res1 = '' ? 'James 1' : 'Johnson 1' ? 'James 2' : "Johnson 2"

// Above if condition is true then normally print but if false the  else option will work as condition n then next statemnt 1 or 2 will print

console.log(res1)