//  you need the sum of every element in the array
let arr = [1,2,3,4,,6,7]
let sum = arr.reduce((a,b) => a + b, 0)
console.log(sum)