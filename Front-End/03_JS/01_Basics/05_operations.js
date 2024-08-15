// Negative of a value
let value = 23;
let negativeValue = -value;
// console.log(negativeValue); // Output: -23
// <-------------------  Basic Arithmetic operations --------------------->
let operations = {
    "2+3": (2 + 3),
    "5-2": (5 - 2),
    "4*5": (4 * 5),
    "10/2": (10 / 2),
    "2**3": (2 ** 3),
    "2%5": (5 % 2),
}
// console.table(operations)

// Concatination of strings
let firstName = "Sajid "
let middleName = "Mehmood "
let lastName = "Tariq"
console.log("Hello " + firstName + middleName + lastName);

// Some confusions
let confusion = {
    "1 + '2'": 1 + "2",
    "'1' + 2": "1" + 2,
    "'1' + '2'": "1" + "2",
    "'1' + 2 + 2": '1' + 2 + 2,
    "1 + 2 + '2'": 1 + 2 + '2',
}
// console.table(confusion)

let points = 0;
points++  // means value will increase after usage
points;
++points  // means value will increase first and will be used afterwards
let x = 0; let y=0;
x = ++y
console.log(x , y);
x = y++
console.log(x , y);
