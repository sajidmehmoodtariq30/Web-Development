// Anything enclosed witin single quotes or double quotes is called a string. for example:-
let myname = 'sajid'
console.log(myname.length);

let age = "17 years old"

// Concatination of strings

// console.log("My name is " + myname + " and I am " + age );
// output:- My name is sajid and I am 17 years old

// Template literal (Modren way)
// console.log(`My name is ${myname.toUpperCase()} and I am ${age}`);
// output:- My name is SAJID and I am 17 years old

// Another way to declare a string
const usrname = new String('sajid-m-tariq');

// Here string is an object and it has access to all the methods of string object
// this string also behaves differently in some cases (like comparison and type checks).

typeof usrname // Output: "object"
usrname instanceof String // Output: true

// new method should only be used if a specific object prototype method is to be used.


const firstName = usrname.substring(0,usrname.indexOf('-'))

const lastName = usrname.substring(usrname.lastIndexOf('-')+1,usrname.length + 1)

const middleName = usrname.substring(usrname.indexOf('-') + 1,usrname.lastIndexOf('-'))
console.log(usrname);
console.table({firstName,middleName,lastName})
console.log(usrname.includes("sajid"));

// or we can use 
console.log(usrname.split('-'));

