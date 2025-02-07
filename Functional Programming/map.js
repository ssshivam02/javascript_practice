const myNumbers = [1,2,3,4,5,6,7,8,9,10]


const newNums= myNumbers.map((num)=> num+10)
console.log(newNums)


// map is applied on all number 
// filter condition
const newNums2 = myNumbers.
                    map((num)=>num*3)
                    .filter((num)=>num*2)
console.log(newNums2)