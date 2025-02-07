function palceOrder(drink){
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

palceOrder('coffee').then((orderPlaced)=>{
    console.log(orderPlaced) // coffee
    let orderIsProcessed = processingOrder(orderPlaced)
    return orderIsProcessed // Order is being Processed.
}).then((processedOrder)=>{
    console.log(processedOrder) // coffee is served
}).catch((err)=>{
    console.log(err)
})  // Chaining of promise.