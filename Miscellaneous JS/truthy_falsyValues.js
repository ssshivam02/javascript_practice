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
// 0n //Bigint
// '',"",``
// null
// undefined
// NaN //NOT A NUMBER

// Truthy
// true
// 1
// []
// {}
// "0"
// 'false'
// " "
// function(){} empty

const userEmail = []

if (userEmail.length===0){
    console.log('Email is empty')
}

const emptyObj = {}
if (Object.keys(emptyObj).length===0){
    console.log('Object is empty')
}

if (false==0){
    console.log(true)
}

if (''==0){
    console.log(true)
}

if (false==''){
    console.log(true)
}

// nullish coalescing operator (??) : null undefined
let val1;
val1 = 5??10
val1 = null??10
val1 = undefined??15
val1 = undefined?? null??20

console.log(val1)

// Terniary operator
// condition? true:false
const iceTeaPrice = 50 //fasle for 100 true
iceTeaPrice>=80 ? console.log("more than 80"): console.log("less than 80")