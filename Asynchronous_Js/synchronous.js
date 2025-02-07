// File handler
const fs = require('fs')

console.log("First Line")

let data = fs.readFileSync('filename1.txt')

console.log(data.toString())

console.log("Last Time")