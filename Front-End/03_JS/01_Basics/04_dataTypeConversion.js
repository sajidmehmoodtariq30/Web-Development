"use strict"  /// defines that newer version of js is being written or used

let score = "33";
let typeScore = typeof (score);                    // string 
let scoreInNumber = Number(score);


// if input is a combiantion of numbers and alphabets i.e.
score = "33abc"
typeScore = typeof (score);                    // string 
scoreInNumber = Number(score);                 // Not a number


// if input is null

score = null
typeScore = typeof (score);                    // object
scoreInNumber = Number(score);                 // 0


// if input is undefined

score = undefined
typeScore = typeof (score);                    // undefined
scoreInNumber = Number(score);                 // NaN


// if input is boolean

score = true
typeScore = typeof (score);                    // boolean
scoreInNumber = Number(score);                 // 1


// flase

score = false
typeScore = typeof (score);                    // boolean
scoreInNumber = Number(score);                 // 0


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);    // true

isLoggedIn = 0;
booleanIsLoggedIn = Boolean(isLoggedIn);    // false

// similarly if a value is given and asked to convert into string then:- 
let age = 15;
let ageString = String(age);                  // "15"
// typeof ageString is                        // string

// if a null or a boolean is converted into string
let a = null;
let aString = String(a);        // "null"
let b = true;
let bString = String(b);     // "true"

// Similarly empty string is false and if anything is written inside a string it will be considered true