const arr = [1,2,3,4,5,6]
arr.forEach((num)=>{console.log(num%=2)})


arr.forEach(function(num){console.log(num)})

arr.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
// forEach dont return arr

const myCoding = [
    {
        languageName:"JAVASCRIPT",
        languageFileName: "js"
    },
    {
        languageName:"JAVA",
        languageFileName: "javac"
    },
    {
        languageName:"PYTHON",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName,item.languageFileName)
})


const userBooks = books.filer((bk) => {bk.pub>=200})
console.log(userBooks)