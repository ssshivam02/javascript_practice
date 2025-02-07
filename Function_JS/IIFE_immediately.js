// IIFE Immediately Invoked Function Expressions

(function chai(){
    // named IIFE
    console.log("Hello, World!");
})(); // we need to add semicolon at end of function


(()=>{
    
    console.log("Hello, World!2");
})();

((name1)=>{
    console.log("Hello, World!2", name1);
})('Shivam');