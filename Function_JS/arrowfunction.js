const user = {
    username : "shivam",
    price : 999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to webiste`)
    }
}


console.log(user.welcomeMessage())

// in function we can use this keyword to access the properties of the object

const chai = () =>{
    let username = "shivam"
    console.log(this.username)
}
chai() // undefined

const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(5,6))

// In implicity return no need to add return keyboard
const addThree = (num1,num2,num3) => (num1+num2+num3)
console.log(addThree(5,6,7))

const returnmyname = (firstname) => ({username1:firstname})
// const returnmyname = (firstname) => {username1:firstname} //undefined

console.log(returnmyname("shivam"));
