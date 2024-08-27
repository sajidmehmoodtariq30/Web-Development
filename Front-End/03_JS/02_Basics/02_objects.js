// object literal
const mysymb = Symbol('Used in user object')
const user = {
    firstName: "Sajid",
    "fullName": 'Sajid Mehmood Tariq',
    mysymb: 'key1',    // this is a string 
    [mysymb]: 'key2',  // this is a symbol
    age: 17,
}

user.firstName // Sajid
user["fullName"] // Sajid Mehmood Tariq
typeof user.mysymb    // string
typeof user[mysymb]   // symbol

user.mysymb = 'key3';

Object.freeze(user)  // so that values are not changed.

// user.age = 17.5
// console.log(user); will not be changed

const myobj = {
    add: function add(x,y) {
        return x+y;
    },
    multiply: function (x,y) {
        return x*y;
    },
    divide: function(x,y) {
        return x/y;
    }
}
let x = 5;
let y = 7;
// console.log(myobj.multiply(x,y));

const hello = {
    usrname:  'Sajid',
    greeting: function(){
        console.log(`Hello ${this.usrname}`);  // this refers to the same object
        
    }
}
hello.greeting();