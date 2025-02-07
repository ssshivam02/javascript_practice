const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault() // this will block submit event
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter a valid number for height and weight')
    }
    else if (height <= 0 || weight <= 0) {
        alert('Please enter a positive number for height and weight')
        }
    else {
        console.log(height)
        console.log(weight)
        const bmi = weight / ((height * height)/10000)
        console.log(bmi)
        results.textContent = `Your BMI is: ${bmi.toFixed(2)}`
        // show th result
        results.innerHTML = `<span>${bmi}</span>`;
    }

})