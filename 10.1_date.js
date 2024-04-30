//date

let myDate = new Date();
console.log(myDate);
console.log(typeof myDate)
console.log()


/* here user can provide date by SELF
 Method 01-->

 let varName = new Date(year, month_Number, date)

*/
let humanDate = new Date(1998, 1, 3);
console.log(humanDate.toDateString())
console.log(humanDate.getTime())
console.log(Math.floor(humanDate.getTime()/1000))
console.log()
/*
Method 02-->

we can use ------>  Date.now() in place of =new Date()
*/
let manDate = Date.now();
console.log(manDate)
console.log()

// converting date into String

console.log(myDate.toString());

// converting date into DATEString

console.log(myDate.toDateString());

// converting date into LocaleString

console.log(myDate.toLocaleString());