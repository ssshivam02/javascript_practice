// setTimeout(cb, 1000); // wait 1 second
// setTimeout(cb, 2000); // wait 2 seconds


console.log('Before')
function greet(){
    console.log("Hello, World!");
}
// Async function
setTimeout(greet, 5000); // wait 5 second
console.log('After')

let timer = setInterval(greet,1000); // every 3 second greet will run, It will keep execute until clearInterval() is called.
setTimeout(function(){
clearInterval(timer); // stop the interval
}, 3000);