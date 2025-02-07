// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 50, 'one');
//    });
   
//    const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
//    });
//    Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//  myPromise().then(res => console.log(res));
//  console.log('second');
// }

// async function secondFunction() {
//  console.log(await myPromise());
//  console.log('second');
// }

// firstFunction();
// secondFunction();

async function f() {
    let result = 'new!';
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
    });
   result = await promise;
   console.log(result);
   }
   
   f();
   