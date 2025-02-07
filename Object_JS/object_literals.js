const JsUser = {
    name1 : "Shivam",
    address : ["Dharma", "Sharma"]
}

console.log(JsUser["name1"]);
console.log(JsUser.address[0]);
//  object literals.
let mySym = Symbol("key1")

const JsUser1 = {
    "First Name": "Shivam",
    LastName : "Sharma",
    [mySym] : "Value of Symbol" // Symbol key in console we get [Symbol(key1)]
}

console.log(JsUser1["LastName"])
console.log(JsUser1["First Name"])
console.log(JsUser1.LastName)
console.log(typeof JsUser1.mySym)
console.log(typeof JsUser1[mySym])
Object.freeze(JsUser1)
JsUser1["First Name"] = "Pra"
console.log(JsUser1);

