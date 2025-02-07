let Person1 = {
    firstName : "Shivam",
    lastName : "Sharma",
    age : 25,

    printDetails : function(){
        console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`);
    }
}

let Person2 = {
    firstName : "Tony",
    lastName : "Sharma",
    age : 27,
}

// call > We borrowing the function from the other function.
Person1.printDetails.call(Person2)

Person1.printDetails()

let Person3 = {
    firstName : "Prap",
    lastName : "Sharma",
    age : 25,
}
// make it global
let printDetails = function(city, state){
    console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am from ${city}, ${state}`);
}

let Person4 = {
    firstName : "Shivam",
    lastName : "Sharma",
    age : 27,
}
printDetails.call(Person3, 'Pune', 'Maharashtra')
printDetails.call(Person4, 'Patna','Bihar')

// Apply
printDetails.apply(Person4, ['Patna','Bihar'])

// Bind > store into variable we can use function later we can use this.
let printDetailsBind = printDetails.bind(Person4, 'Patna', 'New Bihar')
console.log(printDetailsBind) //[Function: bound printDetails]
printDetailsBind()