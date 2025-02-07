'use strict'
console.log(this); //{}


function displayThis(){
    console.log(this) // this undefined
}
displayThis() 

let myObj = {
        name: 'John',
        displayThis: function () {
            console.log(this) // object itself.
            }
    }
    myObj.displayThis()

    let myObj2 = {
        name: 'John',
        displayThis1: function () {
            function displayThis2(){
            console.log(this) // Undefined
            }
            displayThis2()                
        }
    }
    myObj2.displayThis1()