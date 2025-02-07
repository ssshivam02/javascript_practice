const balance = 400
if (balance>500) console.log("test");

if (balance<500){
    console.log("less than 500");
}
else if(balance<750){
    console.log("less than 750");
}
else {
    console.log("you have enough money")
}

const userLoggedin = true
const userAdmin = false
if (userLoggedin && userAdmin) {
    console.log("user is logged in and admin");
}

if (userLoggedin || userAdmin) {
    console.log("user is logged in and not as admin");
}