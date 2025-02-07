// Normal
function Person(_name,_age){
    this.name = _name
    this.age = _age
}

let Person1 = new Person("Shivam", 20)

console.log(Person1.name);

Person1.name = 'Sharma'
console.log(Person1.name)

function Person(_name,_age){
    this.name = _name
    this.age = _age
}
// Hide name
function Person2(_name,_age){
    var name = _name
    this.age = _age

    this.getName = ()=>{ return name}}
let Person3 = new Person2("Shivam", 20)
console.log(Person3)
console.log(Person3.getName())


