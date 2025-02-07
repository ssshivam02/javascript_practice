const arr = [1,2,3,4,5,6]

for (const num of arr){
    console.log(num)
}
// in gives index
for (const num in arr){
    console.log(num)
    console.log(arr[num])
}

const greetings = "Hello Shivam"
for ( const char of greetings){
    console.log(char) 
}
//
const map = new Map()
map.set('name', 'Shivam')
map.set('age', 25)
map.set('city', 'Delhi')
console.log(map.get('name'))
console.log(map.get('age'))
console.log(map.get('city'))
console.log(map)

for (const [key, value] of map){
    console.log(key, value)
}
// we cant use in with map

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift',
}

for (const key in myObject){
    console.log(key, myObject[key])
}