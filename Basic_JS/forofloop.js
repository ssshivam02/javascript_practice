var firstname = "shivam sharma"
for (var c of firstname){
    console.log(c);
}

for (var [index,c] of firstname.split()){
    console.log(index,c);
}

var colors = ['Red','Yellow','Pink','Blue','Black']
for (var color of colors){
    console.log(color);
}

// entries method

for (var [index,color] of colors.entries()){
    console.log(index,color);
}

console.log(firstname.split(' '))