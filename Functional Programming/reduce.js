//  you need the sum of every element in the array
// reduce takes callback function and accumulator



let arr = [1,2,3,4,,6,7]
let sum = arr.reduce((a,b) => a + b, 0)
console.log(sum)

const array1 = [1,2,3,4,5];

const initialvalue = 5;
// accumulator  is initalvalue
const sumWithIntial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialvalue
);
const sumWithIntial1 = array1.reduce(
    function (accumulator, currentValue) { 
        return accumulator + currentValue}, initialvalue
);

console.log(sumWithIntial)
console.log(sumWithIntial1)