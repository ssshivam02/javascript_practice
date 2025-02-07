const tinderuser = new Object() // Singleton
const literal_tinderuser = {}

// console.log(tinderuser);
tinderuser.name = "shivam"
tinderuser.id = 2
tinderuser.email = "shivam@gmail.com"

// console.log(tinderuser)

const regularUser = {
    name: "shivam",
    fullname:{
        usefullname:{
            firstname:"shivam",
            lastname:"sharma"
        }
    },
    email :"shivam"

}
// console.log(regularUser.fullname.usefullname.firstname)
// console.log(regularUser.emai?.fullname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1,obj2}
// const obj4 = Object(obj1,obj2)
const obj5 = Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(obj4);
console.log(obj5);
console.log(obj1)

const obj6 = {...obj1,...obj2}
console.log(obj6)

console.log(Object.keys(obj6))
console.log(Object.values(obj6))
console.log(Object.entries(obj6))

console.log(tinderuser.hasOwnProperty('name'))
console.log(tinderuser.hasOwnProperty('phonenumber'))