var a = 20
var a = 35
let b = 35
// var b = 40 // Not allow declare again
console.log(a)
console.log(b)


//
if (a===35){
    var c = 40
    console.log(b)
}

console.log(b)
if (a===35){
    let d = 40
    console.log(b)
}
// console.log(d) // Not allow declare again

// reassigning is alow
let e = 40
e = 50
console.log(50)
// f = 50
let f;
// console.log(f) ReferenceError: Cannot access 'f' before initialization
