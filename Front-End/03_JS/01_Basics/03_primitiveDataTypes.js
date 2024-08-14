// alert("Hello World")   we are using nodejs and not the browser

/*
Data types in JS are divided into two categories
1. Primitive data types  
2. Non-primitive data types
*/
// There are seven primitive data types i.e. string, number, boolean, bigint, null, undefined
let usrName = "Sajid" 
const typeUsrName = typeof(usrName);
let age = 17;
const typeAge = typeof(age);
let isMale = true
const typeisMale = typeof(isMale);
let accountAge; 
const typeAccountAge = typeof(accountAge)
let userMiddleName = null; // Explicitly indicates that the user has no middle name
const typeUserMiddleName = typeof(userMiddleName);
let largeNumber = 9007199254740991n;
const typeLargeNumber = typeof(largeNumber);
const symbol1 = Symbol("description");
const typeSymbol1 = typeof(symbol1)
const symbol2 = Symbol("description");

// Even though the descriptions are the same, the symbols are unique
//console.log(symbol1 === symbol2); // Output: false


console.table({
    usrName, 
    typeUsrName, 
    age, 
    typeAge, 
    isMale, 
    typeisMale, 
    accountAge, 
    typeAccountAge,
    userMiddleName,
    typeUserMiddleName,
    largeNumber,
    typeLargeNumber,
    symbol1,
    typeSymbol1
});  