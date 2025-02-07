// Async Await - keyword
// async work only with function
// await keyword only with async function
// async function always return promise
// await keyword pause the execution of the function until the promise is resolved or rejected
function placeOrder(drink){
    return new Promise (function(resolve, reject){
        if(drink === 'coffee'){
            resolve('coffee');
        }
        else{
            reject('Sorry, we do not have that drink');
        }
    })
}
// we only use resolve also.
function processingOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being Processed')
        resolve(`${order} is served`)
    })
}

// async function
async function serveOrder() {
    try {
    let orderPlaced = await placeOrder('coffee')
    console.log(orderPlaced)
    let orderProcessed = await processingOrder(orderPlaced)
    console.log(orderProcessed)}
    catch (error) {
        console.log(error)
}}
serveOrder()
