console.log(a) // undefined
greet() // print console present in memory execution

var a = 10

function greet() {
    console.log("Hello World")
}

console.log(fun())
function fun(){
    return 5+6
}

fun(5,6)
console.log(fun(5))
// addone(5) //Cannot access 'addone' before initialization this is hosting.
const addone = function(num){
    return num
}
console.log(addone(5))

