// Imperative --> How to go aboout a problem
// Decalarative--> What the problem is

// Problem :- We will be given a number and we have to checka that if the sqquare of that number is even or not

// Imperative
const a = 4
const aSquared = a*a
let isEven;
if (aSquared % 2 === 0){
    isEven = true
    }else{
        isEven = false
        }
        console.log(isEven) // true

// Declarative way
const checkForSquare = (number) => {
    return number*number % 2 === 0 ? true : false
}

console.log(checkForSquare(4))