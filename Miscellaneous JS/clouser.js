// lexical scope>> inner function can always access outer scope function.
function test(){
    let a = 2
    function test1(){
        console.log(a)
    }
    return test1
}
console.log(test())
let fun = test()
fun()    // function have lexical scope. Nested function have access to outer scope function.

function greet(){
    let name = 'Steve'
    function displayName(){
        console.log('Hi '+ name)
        let age = 25
        function displayAge(){
            console.log('My age is ' + age)
            console.log('Hi '+ name)
        }
        return displayAge
        }
    return displayName
}
let g1 = greet()

console.log(g1)
g1()

let g2 = g1()
console.log(g2)
g2() // Name also we have access. nested scope also work.