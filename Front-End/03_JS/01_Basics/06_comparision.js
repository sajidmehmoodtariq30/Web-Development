let similarDataTypes = {
    "2>3": 2>3,  // flase
    "2<3": 2<3, // true
    "2>=2": 2>=2, // true
    "2<=2": 2<=2, // true
    "2 == 2": 2 == 2, // true
    "2 != 3": 2!=3, // true
}

// using different data types
var differentDataTypes = {
    "2>3": '2'>3,  // false
    "2<3": '2'<3, // true
    "2>=2": '2'>=2, // true
    "2<=2": '2'<=2, // true
    "2 == 2": '2' == 2, // true
    "2 != 3": '2'!=3, // true
    "2>3.5": '2'>3.5, // false
}

let confusion = {
    a: null > 0, // false
    b: null < 0, // false
    c: null >= 0, // true
    d: null <= 0, // true
    e: null == 0, // false
}

// reason is that comparison operator treat datatypes differently than equality operator. The equality operator. Comparisons convert null into a number.
// where as in case of undefined result is always false.

// solution of this problem is to use === that check equality along with data type
2==='2'  // false

