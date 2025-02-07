// Find returns the first element of an array that satisfy the sondition

const transactions = [1000, 3000, 4000, 2000, -898, 3800,-4000]
const inrtoDollar = 80
let firstWithdrawl = transactions.find(function(x){return x<0})
console.log(firstWithdrawl)
// Find index returns index of satisfy the condition
let firstWithdrawlall = transactions.findIndex(function(x){return x<0})
console.log(firstWithdrawlall)

