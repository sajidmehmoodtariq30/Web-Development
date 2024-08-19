const Marvel_Heroes = ['Thor', 'IronMan', 'SpiderMan']
const DC_Heroes = ['Batman', 'GreenArrow', 'Flash']

// push includes whole array as an element
// Marvel_Heroes.push(DC_Heroes)
Marvel_Heroes.length    // 4 if pushed DC_Heroes

// concat adds to more arrays and returna new array
let crossOver = Marvel_Heroes.concat(DC_Heroes);
crossOver.length;    // 6

let newCrossOver = [...Marvel_Heroes, ...DC_Heroes]
// console.log(newCrossOver);    // same result


// const arr1 = [1,2,[3,4],[5,6,[7,8,9],10],11]
// const flatarrr = arr1.flat(3)
// console.log(flatarrr);

const myname = ["sajid",'m',"Tariq"]
Array.isArray(myname)   // true

const usrname = 'sajidtariq30'
// console.log(Array.from(usrname));


let score1 = 100
let score2 = 150
let score3 = 200

console.log(Array.of(score1,score2,score3));
