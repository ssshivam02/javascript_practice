let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)


let myCreatedDate = new Date(2023, 0, 23) // 0 is Jan
let myCreatedDatetime = new Date(2023, 0, 23,5,3) // 0 is Jan
console.log(myCreatedDate.toString())
console.log(myCreatedDatetime.toString())


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))
console.log(myCreatedDate.getDay())
console.log(myCreatedDate.getMonth()+1)
console.log(myCreatedDate.getDate())
console.log(myCreatedDate.toLocaleString('default',{
    weekday: 'long',
    timeZone: 'UTC',
}))