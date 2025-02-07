const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId) // False

const id1 = 123
const anotherId1 = 123
console.log(id1==anotherId1); // True


const heros = ["shivam","ironman","hero"]
let myobj = {
    name:"shivam",
    age:20,
    address : {
        city:"delhi",
        state:"delhi",
    }
}
console.log(myobj.address.state)
console.log(typeof(heros))
console.log(typeof(myobj))
console.log(Array.isArray(heros))