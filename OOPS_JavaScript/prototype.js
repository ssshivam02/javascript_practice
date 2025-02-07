// When we create objects , We get prototype automatically
// By default link to obj.
// we can see in browser.
// Prototype chaining> function prototye-> object->prototype->null
// let obj = { name: "John" };
// console.log(obj)

function Person(_name) {
    this.fname = _name;
    this.getNameAndAge = function() {
        console.log(this.fname);
    }
}

let person1 = new Person("Shivam")
console.log(person1)
let person2 = new Person("Rahul")
console.log(person2)

// Dont repeat code we need to add function in prototype
function Person1(_name) {
    this.fname = _name;
}

// Adding into prototype
// Inside we add any thing which obj must have.
Person1.prototype.getNameAndAge = function() {
    console.log(this.fname);
    }
let person11 = new Person1("Shivam")
console.log(person11)
let person12 = new Person1("Rahul")
console.log(person12)