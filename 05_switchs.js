const prompt = require('prompt-sync')();
const num = prompt("Enter no b/w 0-6: get Day: ");
let Dnum = parseInt(num)
/*

Syntax
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

*/
let day;
switch (Dnum) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    default:
      day = "Enter num  b/w 0-6"
}
console.log(day)