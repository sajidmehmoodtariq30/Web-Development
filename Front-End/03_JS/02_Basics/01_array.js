const myArray = [1,2,3,4,5];
myArray[4];  // 5  because of zero base indexing 

// array use shallow copy means copy of an object share same reference point i.e. change in one will change the other

// Another way to declare array
const myheroes = new Array("Batman","Superman");
myheroes[0];  // Batman

// Methods of Array
// myArray.push(6,7);// adds elements at the end
// myArray.pop();    // removes element from last
// myArray.unshift(9,0);  // adds elements at first
// myArray.shift();  // removes element from first
// myArray.includes(9) // false
// console.log(myArray.indexOf(2))

const newarr = myArray.join()
newarr  // type is string


// slice vs splice
console.log("A", myArray);
let mynewarr1 = myArray.slice(1,3);  // returns a new array and orignal is not affected
myArray    // [1,2,3,4,5]
mynewarr1    // [2,3]
const mynewarr2 = myArray.splice(1,3);  // removes elements from array and returns removed elements
mynewarr2   // [2,3,4]
myArray     // [1,5]
