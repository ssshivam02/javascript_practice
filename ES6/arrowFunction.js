let a =2
let test1 = function(){
    console.log(1);
    console.log(a);
}
test1();
let test2 = function(a){
    console.log(a);
}
test2(3);

let test3 = function(a,b){
    console.log(a);
    console.log(b);
}
test3(4,5);

// Arrow
let test4 = () => {
    console.log(1);
    }
test4();

let test5 = (a) =>{
    console.log(a);
}
test2(3);

let test6 = (a,b)=>{
    console.log(a);
    console.log(b);
}
test3(4,5);

let test7 = (a,b,c)=> console.log(a,b,c)

test7(7,8,9)