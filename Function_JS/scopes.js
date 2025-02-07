// var we can use any where
function one(){
    const username = "shivam"
    function two(){
        console.log(username)
        const website = "youtube"
    }
    // console.log(website) we cann't use inner function variable
    two()
}
// In clouser, inner function can use outer function variable.

one()