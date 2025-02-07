let firstPerson = 'Shivam'

let SecondPerson = firstPerson

firstPerson = 'Prapti'

// Primitive value will not change >> Immutable
// Numbers
// Strings
// Null
// Boolean
// Undefined
// Created in stack memory
// Here value will assign not Reference

console.log(firstPerson) // This will get changed.
console.log(SecondPerson) // This will not changed.


// Reference >> Mutable
// In heap memory
// address will assign
let firstPersonobj={
    name : 'Shivam',
    service : 'Husband'
}
let SecondPersonobj = firstPersonobj
firstPersonobj['name'] = 'Prapti'
console.log(firstPersonobj)
console.log(SecondPersonobj)
