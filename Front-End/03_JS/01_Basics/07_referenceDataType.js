// Non-primitive data types are objects, arrays, functions etc. They are passed by reference, not by value. So, when you pass a non-primitive data type to a function, you are passing a reference to the original object, not a copy of the object.
// Unlike primitive types, reference types are mutable. This means you can change their properties or elements without changing the reference itself.
// When you assign a reference type to another variable, you're copying the reference, not the actual data. This means both variables will point to the same object in memory.
// Reference data type uses heap memory
// Arrays

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

// console.log(arr1); // Output: [1, 2, 3, 4]

// objects

let obj1 = { name: "Sajid", age: 17 };
let obj2 = obj1;

obj2.age = 18;

// console.log(obj1.age); // Output: 18




function greet() {
    console.log("Hello!");
}

let greetCopy = greet;

// greetCopy(); // Output: "Hello!"
