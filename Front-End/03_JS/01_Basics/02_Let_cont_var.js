/*
    let,var and const are keywords in JS.
    let and var are used to declare variables. 
    Whereas const is used to declare a constant.
    Variables are containers whose values can be changed.
    A constant is a variable whose value cannot be changed.
    var is a older feature.
    let and const is new ES6 js feature.
    {} is scope in js.
*/

age = 25;                           // will not throw an error.

/* 
    let and const are block scoped.
    wheras var is function scoped.
*/
{
    let x = 10;
    {
        let x = 5;
        // console.log(x);          // 5
    }
    // console.log(x);              // 10                
}

{
    var y = 10;
    {
        var y = 5;
        // console.log(y);          // 5
    }
    // console.log(y);              // 5            
}

// Hoisting: var declarations are hoisted to the top of their scope (function or global), but the assignment remains where it is. This means the variable is undefined until the line where it is assigned a value.

// console.log(a);                  // undefined
var a = 20; 

// Hoisting: let is hoisted, but not initialized. This means that if you try to use the variable before the line it is declared, it will throw a ReferenceError.

// console.log(b);                  // Reference error
let b = 5;

// Immutable Binding: The value assigned to a const variable cannot be reassigned. However, if the value is an object or array, the object or array itself can still be modified.

const c =24;
// c =25; // Reference error

// var can be redeclared

var a = 20; //                      // NO Error

// let: Cannot be re-declared within the same scope.

let d = 10;
//let d = 20; // Error: Identifier 'x' has already been declared

// var: Can be declared without initialization. It will be undefined until a value is assigned.
var e;                              // undefined

// let: Can be declared without initialization. It will be undefined until a value is assigned.
let f;                              // undefined

// const: Cannot be declared without initialization. 
// const g; // Error: Missing initializer in const declaration

/*
summary:-
var is function-scoped, hoisted, and can be re-declared.
let is block-scoped, hoisted (but not initialized), and cannot be re-declared within the same scope.
const is block-scoped, hoisted (but not initialized), cannot be re-declared, and must be initialized at the time of declaration.

*/