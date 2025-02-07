// Primitive Use stack and Refrence Use Heap memory
// Primitive types are stored in the stack, while reference types are stored in the heap.
// In primitive types, the value is stored in the stack, while in reference types, the reference to the object
// is stored in the stack, and the object itself is stored in the heap.
// If we change primitive type value it will not change copied value.

let myname =  "shivamSharma"
let myname2 = myname

console.log(myname);
console.log(myname2);

myname = "Pra"
console.log(myname);
console.log(myname2);

let myobj = {
    name: "shivamSharma",
    age: 20
}
let myobj1 = myobj
console.log(myobj);
console.log(myobj1);

myobj["name"] = "pra"
console.log(myobj);
console.log(myobj1);

// refrence types are stored in the heap memory
// if we change the value of the reference type it will change the copied value. because both are
// pointing to the same memory location.
// In the case of primitive types, the value is stored in the stack, while in reference types
// the reference to the object is stored in the stack, and the object itself is stored in the
// heap. So, if we change the value of the reference type, it will change the copied
// value because both are pointing to the same memory location.

