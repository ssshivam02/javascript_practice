const array = [1,2,3,5,4,6,7,8,9]
const arr = new Array()
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    arr.push(array[index])
    console.log(element); 
}
console.log(arr)

let score = 1
do{
    console.log(`Score is ${score}`);
    score++;
}while(score<=10);



let score1 = 11
do{
    console.log(`Score is ${score1}`);
    score1++;
}while(score1<=10);