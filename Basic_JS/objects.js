var car = {
 'brand': 'BMW',
 'wheels': 4,
 'engine': 'V8',
 'year': 2015,
 'available':null,
 'Owner':{
    'firstname':"Shivam",
    'lastname':'Sharma',
    'Degree':['Btech','CBSE']
 }
}
console.log(car)
console.log(car['brand'])
console.log(typeof car)
console.log(typeof car['brand'])
console.log(typeof car['available'])
console.log(car.year)
console.log(car.Owner)
console.log(car.Owner.firstname)
console.log(car.Owner['Degree']);
console.log(car.Owner.Degree[0]);
