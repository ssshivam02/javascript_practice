let arr = ['Hi','I', 'am','Mrinal']
let [a,b,c,d] = arr
console.log(a,b,c,d) // Hi I am Mrinal






// Destructing an object
let obj = {
    firstname: 'Shivam',
    age: 20,
    city: 'Patna'
}
let {e,g,f} = obj
let {firstname,age,city} = obj
console.log(firstname,age,city) // Shivam 20 Patna
console.log(e,g,f) // undefined undefined undefined
// By using alternate key we can get object 
let {firstname:fn,age:ag,city:ct} = obj
console.log(fn,ag,ct) // Shivam 20 Patna


// Nested object
let obj1 = {
    name: 'Shivam',
    ageobj1: 20,
    cityobj1: 'Patna',
    address: {
        street: 'Street 1',
        city: 'Patna',
        state: 'Bihar'
        }
    }
let {name,ageobj1,cityobj1,address:{street,city:ct1,state}} = obj1
console.log(name,ageobj1,cityobj1,street,ct1,state) // Shiv
// Shivam 20 Patna Street 1 Patna Bihar