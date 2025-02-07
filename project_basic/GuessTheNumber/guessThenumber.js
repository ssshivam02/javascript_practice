
const randomNumber = console.log(parseInt(Math.random()*100+1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true
if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const userGuess = parseInt(userInput.value)
        validateGuess(userGuess)
    })
}
function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number')
        return}
    else if(guess<1){
        alert('Please enter a number between 1 and 100')
    }
    else if(guess>100){
        alert('Please enter a number between 1 and 100')
        }
        else{
            prevGuess.push(guess)
            if(numGuess==11){
                alert('Game Over')
                playGame = false
                displayGuess(guess)
                displayMessage(`Game Over. Random number was ${randomNumber}`)
                endGame()
            }
            else{
                displayGuess(guess)
                checkGuess(guess)
            }
        }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Well done, you found the number ${randomNumber} in ${numGuess}`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage('Too low')
    }
    else if(guess>randomNumber){
        displayMessage('Too high')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML+= `${guess}  `
    numGuess++;
    remaining.innerHTML = `Remaining guesses: ${11-numGuess}`

}

function displayMessage(message){
    lowOrHi.innerHTML = `${message}`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(){
        playGame = true
        numGuess = 1
        prevGuess = []
        guessSlot.innerHTML = ''
        lowOrHi.innerHTML = ''
        remaining.innerHTML = `Remaining guesses: 11`
        userInput.removeAttribute('disabled')
        randomNumber = Math.floor(Math.random()*100)+1
        startOver.removeChild(p)
    })

}

function endGame(){
userInput.value = ''
userInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML = `<h2 id ="newGame">Start new game.</h2>`
startOver.appendChild(p)
playGame = false
newGame()
}