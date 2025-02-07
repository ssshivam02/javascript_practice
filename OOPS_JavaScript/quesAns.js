// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//    }
//    const member = new Person('Lydia', 'Hallie');
//    Person.getFullName = function() {
   
//    return `${this.firstName} ${this.lastName}`;
   
//    };
//    console.log(member.getFullName());
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     }
//     const lydia = new Person('Lydia', 'Hallie');
//     const sarah = new Person('Sarah', 'Smith');
//     console.log(lydia);
//     console.log(sarah);

const bird = {
    size: 'small',
   };
   
   const mouse = {
    name: 'Mickey',
    small: true,
   };
   console.log(mouse[bird["size"]]);