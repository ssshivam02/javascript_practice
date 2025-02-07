// Immutable for refrence
/// ... spread operator

let firstPersonobj={
    name : 'Shivam',
    service : 'Husband',
    address:{
        city:'Patna',
        state:'Bihar'
    }
}
let SecondPersonobj = {...firstPersonobj} // This protecting the first object from changes
firstPersonobj['name'] = 'Prapti'
console.log(firstPersonobj)
console.log(SecondPersonobj)
// Problem with spread operator is in nested object.

SecondPersonobj.address.city = 'Pune'

console.log(SecondPersonobj)
console.log(firstPersonobj)