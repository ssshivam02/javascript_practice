const a =4
console.log(a)
// a = 5 TypeError: Assignment to constant variable.
const obj = {foo:1}
obj.bar =2
console.log(obj)
obj.foo = 3
console.log(obj)

console.log(typeof (new (class { class () {} })))
