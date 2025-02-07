// In Js, a callback function is a function that is passed as an argument to another function.
// It is used to perform a specific task after a certain event has occurred.
// In this example, we will use a callback function to print a message after a certain time has
// elapsed.
function printFirstName(firstname, callback) {
    console.log(firstname, callback('Sharma'));
}

function printLastName(lastname) {
    return lastname;
}

printFirstName('Shivam', printLastName)
// Output: Shivam Sharma

const isEven = (n)=>{
    return n%2===0
}
let printResult = (evenFn, num) =>{
    const isNumEven =  evenFn(num)

    console.log(isNumEven)
    console.log(`The number ${num} is ${isNumEven ? 'even' : 'odd'}`)
}
printResult(isEven, 10) // Output: true
printResult(isEven, 5) // Output: False
