console.log("Javascript : var, let & const  explantion....");
var a = 45;

//----------------------< var >----------------------------------
// var is not block scoped n it can be accessed and modifies of of scope eventhough it is declared insiside a block or scope

{
  var b = "Chennai";
  console.log(b);
}
console.log(b);
// we can redecalre var variable with similar name a.

// so here u can see that it's declared inside a block & it can be accessed and modified outside the block as well which is not right

//----------------------< let >----------------------------------

let name = "Pakistan lose against India.";
{
  let name = "Australia lose against Pakistan.";
  console.log(name);
}
console.log(name);

// we can not redecalre let var with similar name but we can update it.
// so here u can see that let is block scoped and it can't be accessed and modified outside the block which is right. and it's treated each name variable as a new let bcz both are at different place

//----------------------< const >---------------------------------

const value = "Sun rises in the east.";

//value = "sun rises in the west.";

// we can only decalre & assign const once.
// we can not assign again any value in const variable.

console.log(value);
