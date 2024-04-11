const prompt = require('prompt-sync')();

// const num = prompt("Enter no b/w 0-6: get Day: ");
// let Dnum = parseInt(num)// 
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

// let day;
// switch (Dnum) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
//     default:
//       day = "Enter num  b/w 0-6"
// }
// console.log(day);


// let num1 = prompt("Enter age: ");
// let age = parseInt(num1)


// switch (age) {
  
    
//   case 18:
//     result = "Valid for license";
//     break;
//   case 17:
//     result = "not valid";
//     break;
//   case 15:
//     result = "not valid";
//     break;
//   case 16:
//     result = "not valid";
//     break;
//   default:
//     result = "Enter vaild age";
// }
// console.log(result)


const mark = prompt("Enter marks you got: ")


switch(mark)
{
  case (mark>=90 && mark <=100):
    console.log("A - Honor");
    break;
    
  case (mark>=70 && mark <=89):
    console.log("A - Grade");
    break; 

  case (mark>=60 && mark <=69):  
    console.log("B -  Grade");
    break;

  case (mark>=50 && mark <=59):  
    console.log("C - Grade");
    break;

  case (mark<50):  
    console.log("Need to study now");
    break; 

  default:
    console.log("Enter marks properly you got");
    break;
     
}
