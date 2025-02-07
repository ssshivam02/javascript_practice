let arr = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
    { id: 4, name: "Alice", age: 20 },
    { id: 5, name: "Mike", age: 40 }
]
// Age of All the Men(age>30)
let males = arr.filter((obj) =>{return obj.age>30})

let ageOfmales = males.map((males)=>{return males.age})
console.log(males)
console.log(ageOfmales)

//chaining
let result = arr.filter((obj) =>{return obj.age>30}).map((males)=>{return males.age})
console.log(result)

//From the transactions array filter out positive elements and calculate the total amount.
// Use filter and reduce to achieve this.
const transactions = [1000, 3000, 4000, 2000, -898, 3800,-4000]
const inrtoDollar = 80
let dollarTransaction = transactions.filter(function(x){return x>0}).reduce((a,b)=>a+b,0)
console.log(dollarTransaction)

let sum = 0;
let arr1 = [10,15,20,30];  
arr1.forEach(function myFunction(element) {  sum = sum + element;  });  
console.log(sum);