function namegreets(){
    console.log("Hello, my name is John");
}
namegreets()

function namegreetwithparameter(parameterfirstname,parameterlastname){
    console.log("Hello, my name is " + parameterfirstname + " " + parameterlastname);
}

namegreetwithparameter("ArgumentShivam","ArgumentSharma")
let funcname = ()=>{
    return "Hello, my name is Shivam"
}
y = funcname()
console.log(y)

function loginUserMessgae(username="sam"){
    if(username==undefined){
        console.log("Please enter your username");
        return
    }
    console.log("Welcome, " + username + " you are logged in");
}

loginUserMessgae()

// ...num is rest case 
function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(200,400,500))