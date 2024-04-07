/*
3 types

> if
> if...else if...
> if ... else...if else...
*/

const prompt = require('prompt-sync')();


let age = prompt("Enter your age there.....")

age = Number.parseInt(age); // converting string to Int

if(age <= 0)
{
  console.log("Your age is: ", age);
  // console.log("Enetr a valid number")
}


let name = prompt("Enter your name :");

if(!name )
{
  console.log("Plz enter name.")
}
else{
  console.log("Nice to meet you "+name)
}


let marks = prompt("Enter your marks:");

if(marks <= 40 && marks > 0)
{
  console.log("U must be serious for yr study")
}
else if(marks <= 100 && marks > 70)
{
  console.log("Hey! you worked hard")
}
else if(marks <= 70 && marks > 40)
{
  console.log("Hey! put more effort next time")
}
else
{
  console.log("Your r fail")
}

