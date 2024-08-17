const score1 = new Number(400);
// console.log(score1);   // [Number: 400]
typeof score1 // Output: "object"
score1 instanceof Number // Output: true

let balance = 37.0898
balance.toFixed(2)    // 37.09
balance.toPrecision(2)    // 37

const hundreds = 100000;
hundreds.toLocaleString('en-in')  // 1,00,000


// Maths Library
Math  // Object [Math] {}

let arr = [2,4,5,9]

Math.abs(-4); // changes sign of negative value output is 4
Math.round(3.4); // 3
Math.ceil(3.1); // 4 rounds off to next decimal place 
Math.floor(3.9); // 3 rounds off to previous decimal place
Math.min(2,4,6,1) // 1
Math.max(2,5,3,8) // 8

let a = Math.round(((Math.random()*5) +1));  // gives random num between 1 and 6
// console.log(a);

const min = 5;
const max = 9;
const random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random);
