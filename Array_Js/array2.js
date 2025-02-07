// push is as append
let arr1 = ["shivam","sharma","lol"]
let arr2 = ["UIT", "RGPV"]

let arr3 = arr1.push(arr2) // returns the length of the array
console.log(arr3);
// console.log(arr1);

let arr5 = ["shivam","sharma"]
let arr4  = arr5.concat(arr2) // returns a new array
console.log(arr4);


let arr6 = ["shivam","sharma","HEEEEE"]
let arr7 = [...arr6, ...arr2] // returns a new array
console.log(arr7);

const arr8 = [1,2,3,[4,5,6,[7,8,9,10]]]
console.log(arr8.flat(5));

console.log(Array.isArray("Shivam"))
console.log(Array.from("Shivam"))
console.log(Array.from({name:"shivam"})) // return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
console.log(Array.of("shivam","sharma")) // returns array with one element