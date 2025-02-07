class Person{
    constructor(_name,_age){
        this.name=_name;
        this.age=_age;
    }
    welcome(){
        return (`Hello, my name is ${this.name} and I am ${this.age}
            `);
    }
}


let Person1= new Person("John",30);
console.log(Person1.name)
console.log(Person1.age)
console.log(Person1)
console.log(Person1.welcome())