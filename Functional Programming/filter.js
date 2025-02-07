// You have to che k for even numbers in an array and put them in a separate array
// and then print the array with even numbers
let numbers = [1, 2, 3, 4, 5, 6]
let evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers) // Output: [2, 4, 6]


let evenNumbers1 = numbers.filter((num) =>{
    return num % 2 === 0})
console.log(evenNumbers1) // Output: [2, 4, 6]


let evenNumbers2 = numbers.filter(num => (num % 2 === 0))
console.log(evenNumbers2) // Output: [2, 4, 6]

const transactions = [1000, 3000, 4000, 2000, -898, 3800,-4000]
const inrtoDollar = 80
let dollarTransaction = transactions.filter(function(x){return x<0})
console.log(dollarTransaction)
