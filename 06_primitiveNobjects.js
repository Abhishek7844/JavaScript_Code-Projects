/* 

N N S S B B U 
N = null
N = number
S = symbol
S = string
B = boolean
B = bigint
U = undefined

*/

let a = null;
let b = 999999;
let c = Symbol("This is the way to decalre a symbol");
let d = "string";
let e = true; // it can be false also
let f = BigInt("970") + BigInt("30");
let g = BigInt("1000");
let h = undefined;

console.log(a, "\n", b, "\n", c, "\n", d, "\n", e, "\n", f, "\n", g, "\n", h);
console.log(typeof g);
console.log(typeof h);

//<-------------- < Objects > ----------------------------------->

// obj is a non-primitive data type
// obj is a key value pair, it's same like list in Python.py

const obj = {
  names: "Pramdd",
  age: 25,
  class: "MBA",
  roll: "E69",
  marks: "95%",
  address: "Bangalore",
  Qualification: "BBA",
};
// how to access Onject dataype in JS :-

console.log(obj["names"]);
console.log(obj["address"]);
// to know data type
console.log(typeof obj);

//Object 2

const obj2 = {
  Song1: "Hindi",
  Song2: "Tamil",
  Song3: "English",
  Song4: "Bengali",
  Son5: "Gujarati",
  Song6: "Punjabi",
  Song7: "Marathi",
  Song8: "Rajsthani",
  Song9: "Haryanvi",
};

console.log(obj2["Song4"]);
console.log(obj2);
