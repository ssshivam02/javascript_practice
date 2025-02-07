
let firstPersonobj={
    name : 'Shivam',
    service : 'Husband',
    address:{
        city:'Patna',
        state:'Bihar'
    }
}
let SecondPersonobj = JSON.parse(JSON.stringify(firstPersonobj)) // This will create complete new object.
firstPersonobj['name'] = 'Prapti'
console.log(firstPersonobj)
console.log(SecondPersonobj)


SecondPersonobj.address.city = 'Pune'

console.log(SecondPersonobj)
console.log(firstPersonobj)