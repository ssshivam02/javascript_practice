// compare operator In Js ==, ===
let a = "02"
let b = "02"

console.log(a==b) // check for value lose checking
console.log(a===b) // check for type strict checking

let c = 2
if (a){
    console.log('I am truthy')
}
else{
    console.log('I am falsy')
}
// Falsy
// false
// 0
//-0
// 0n
// '',"",``
// null
// undefined
// NaN