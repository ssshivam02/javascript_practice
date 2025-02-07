// File handler
const fs = require('fs')

console.log("First Line")

// ASYNC
fs.readFile('filename1.txt', callback1)

function callback1(err, data) {
    if(err){
        console.log(err)
    }
    console.log(data.toString(),"data1")
    fs.readFile('filename2.txt', callback2)
}


function callback2(err, data1) {
    if(err){
        console.log(err)
    }
    console.log(data1.toString(),"data2")
    
    fs.readFile('filename3.txt', callback3) // tHIS IS FOR SERIAL ORDER EXECUTION.
}


function callback3(err, data1) {
    if(err){
        console.log(err)
    }
    console.log(data1.toString(),"data3")
}
console.log("Last Time")