const usrProfile = {}

usrProfile.id = '123abc'
usrProfile.fullname = {
    firstName: "Sajid M",
    lastName: "Tariq"
}

// console.log(usrProfile.fullname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = Object.assign({},obj1,obj2);  // (target , sources)


const obj3 = {...obj1, ... obj2}
console.log(obj3);

