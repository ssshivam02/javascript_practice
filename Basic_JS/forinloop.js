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
// for-in loop
for (var key in car) {
    console.log(key)
    console.log(car[key])
}

var colors = ['Red','Yellow','Pink','Blue','Black']
for (var color in colors) {
    // console.log(color)
    console.log(color+' + '+ colors[color])
}