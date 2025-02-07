// What is a Higher Order Function?
// A function that takes another function as an argument is called a Higher Order Function.
// It is a function that returns a function as its result.
// It is a function that takes another function as an argument and returns a function as its result.
let arr = [1,2,3,4,5]
let squaredArr = []

for(let i=0;i<arr.length;i++){
    squaredArr.push(arr[i]*arr[i])
}
console.log(squaredArr) // [1, 4, 9, 16,20]

// map method
let arr2 = [1,2,3,4,5]
let squaredArr2 = arr2.map(function(x){return x*x})
// In python a = map(function, iterable)
console.log(squaredArr2)

const transactions = [1000, 3000, 4000, 2000, -898, 3800,-4000]
const inrtoDollar = 80
let dollarTransaction = transactions.map(function(x){return x/inrtoDollar})
console.log(dollarTransaction)

// foreach dont return anything
// map returns a new array
const transactionsfor = [1000, 3000, 4000, 2000, -898, 3800,-4000]
const inrtoDollarfor = 80
let dollarTransactionfor = transactions.forEach(function(x){console.log(x/inrtoDollar)})
console.log(dollarTransactionfor) // undefined
