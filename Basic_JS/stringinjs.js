const name ="shivam"
const age = "20"

console.log(name+age)

console.log(`${name},${age}`)


const gameName = new String("Shi-vam")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()) // this will not change original value.
console.log((gameName.charAt(2)));// postion of chr at 2nd index
console.log(gameName.indexOf("hi"));// index of Shivam in string
console.log(gameName.split('-'))
console.log(gameName.substring(2,5))
console.log(gameName.slice(-2,-1),18)

let yourname = "                    Shivam               "
console.log(yourname.trim())
console.log(yourname.trimEnd())
console.log(yourname.trimStart())

let url = "Shivam%20sharma"

console.log(url.replace("%20",' '))
console.log(url.includes("Shivam"))

