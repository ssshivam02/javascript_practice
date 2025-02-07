// Classical Inheritance :- Methods & Properties from Base class can be put down or can be passed into drived class.  
class Person{
    constructor(_name,_age){
        this.name=_name;
        this.age=_age;
    }
    welcome(){
        console.log((`Hello, my name is ${this.name} and I am ${this.age}
            `))
    }
}
class Student extends Person{
    constructor(_name,_age,_rollno){
        super(_name,_age);
        this.rollno = _rollno;
        
    }
    welcome(){
        return (`Hello, my name is ${this.name} and I am ${this.age} and
            my roll no is ${this.rollno}`);
            }
    test(){
        super.welcome()
    }
}
    
let student = new Student("Rahul", 20, 101);
console.log(student.welcome());
console.log(student.rollno)
student.test()
let Person1= new Person("John",30);
console.log(Person1.name)

Person1.welcome()
