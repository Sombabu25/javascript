// comparision operator

let a = 2
let b = "2"
let c = "c"

console.log(a == b) //  If the values are of different types, JavaScript will attempt to convert them into the same type before making the comparison.
console.log(a < c) // "c" is not a valid numeric string, JavaScript converts it to NaN (Not-a-Number). Comparing any value (except NaN itself) to NaN with comparison operators will always return false

let d=NaN
let e=NaN

console.log(d==e) //NaN is that it is not equal to anything, including itself

// strict equal to , it checks both type and same value
// let x = 20
// let y = "20"
// console.log(x === y)

// strictly not equal to !==
let x = 20
let y = "20"
console.log(x !== y)

