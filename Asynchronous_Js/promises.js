// Promise
/*
1. Pending State
2. Fulfiled State
3. Rejected State
4. Settled State
*/
// how to produce a promise
let myPromise = new Promise((resolve, reject) => {
    // when the promise is created, it is in pending state
    // it will be in fulfilled state when resolve is called
    // it will be in rejected state when reject is called
    // it will be in settled state when either resolve or reject is called
    const a = 10;
    const b = 20;
    setTimeout(()=>{
        if(a + b === 41){
            resolve('The sum are equal to 30');
    }
else{
    reject('The sum are not equal to 30');  

}},2000)
})

// Promise { <pending> }

// console.log(myPromise)

// fulfilled - then method
// resolve is link with then
// consuming the promise
// this message is from resolve function
myPromise.then((message) => {
    console.log(message);
    })
// reject is link with catch
myPromise.catch((err)=>{
    console.log(err);
})