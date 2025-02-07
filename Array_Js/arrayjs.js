let arr = [1,2,3,4,5,6,7,8,10] // Shallow copy, it can change.
let arrhero = ['hero1','hero2','shivam']

console.log(Array.isArray(arr))
console.log(Array.isArray(arrhero))
console.log(arr.length)
console.log(arrhero.length)
arr.push(11)
console.log(arr);
arr.pop()
console.log(arr)
// unshift add at first
arr.unshift(0)
console.log(arr)
// shift remove at first
arr.shift()
console.log(arr.includes(9)) // false
console.log(arr.includes(8))
console.log(arr.indexOf(8))
console.log(arr.indexOf(9)) // -1
const newArr = arr.join()
console.log(newArr)
console.log(typeof(newArr))
console.log((arr));
let newarrslice = arr.slice(1,3)
console.log(newarrslice)
console.log(arr)


// splice method manipulate original array
// splice method return array of removed elements
let newarrsplice = arr.splice(1,3)
console.log(newarrsplice)
// splice method manipulate original array
console.log(arr)


