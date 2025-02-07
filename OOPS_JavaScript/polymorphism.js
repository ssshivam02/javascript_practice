// poly > many, morph > forms, ism> method
class Animal{
    sound(){
        console.log('Animals make different sounds.')
    }
}

class Dog extends Animal{
    sound(){
        console.log('Dogs say Woof!')
    }
}
class Cat extends Animal{
        sound(){
            console.log('Cats say Meow!')
            }
        }
let Animal1 = new Animal()
let tommy = new Dog()
let kitty = new Cat()
Animal1.sound()
tommy.sound()
kitty.sound()
