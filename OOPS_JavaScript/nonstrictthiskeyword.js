// // 'use strict'
// a=10
// // a = 10  by using strict mode its failing.
// console.log(a)
// console.log(this) // {} empty object

// function displayThis(){
//     console.log(this) // window object // This refer to global object
// }
// displayThis()

// let myObj = {
//     name: 'John',
//     displayThis: function () {
//         console.log(this) // myObj object
//         }
// }
// myObj.displayThis() //{ name: 'John', displayThis: [Function: displayThis] }
// this keyword refers to the object that is calling the function. In this case, it is my
// Obj object.
// this keyword is used to access the properties of the object. In this case, it is accessing
// the name property of myObj object.
// this keyword is used to access the methods of the object. In this case, it is accessing
// the displayThis method of myObj object.

// obj>fn>fn
let myObj2 = {
    name: 'John',
    displayThis1: function () {
        function displayThis2(){
        console.log(this) // myObj object //Global object
        }
        displayThis2()                
    }
}
myObj2.displayThis1()