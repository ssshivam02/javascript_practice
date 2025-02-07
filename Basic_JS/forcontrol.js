var a = "hello world"

for (var i = 0; i < a.length; i++) {
    console.log(a[i])
}


var arr = [2,3,4,5,6,7,9,10]
var result = [];
for (var i=0; i < arr.length; i++){
    console.log(arr[i]*arr[i])
    result.push(arr[i]*arr[i])
}
console.log(result);
