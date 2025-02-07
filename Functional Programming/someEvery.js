
// Some method
// Some returns true if at least one element in the array satisfy the condition
const transactions = [-1000, -3000,-4000, -2000, -898, -3800,-4000]
const inrtoDollar = 80
let dollarTransaction = transactions.some(function(x){return x>0})
console.log(dollarTransaction)
// Every method
// Every returns true if all elements in the array satisfy the condition
let dollarTransactionEvery = transactions.every(function(x){return x<0})
console.log(dollarTransactionEvery)