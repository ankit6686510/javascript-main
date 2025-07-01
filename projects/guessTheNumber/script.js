let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guesSlsot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;
if (playgame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number more than 1");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevguess.push(guess);
        if (numguess === 11) {
            displayGuess(guess);
            displayMessage(`Game over, the random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess) {
    userinput.value = '';
    guesSlsot.innerHTML += `${guess}`;
    numguess++;
    remaining.innerHTML = `${11 - numguess} `;
}

function displayMessage(message) {
    loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userinput.value = ''; // Clear the value in userinput
    userinput.setAttribute('disabled', ''); // Disable user input
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start new game</h2>`;
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame() {
    const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numguess = 1;
        guesSlsot.innerHTML = `${11 - numguess} `;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p); // Remove the new game button
        playgame = true;
    });
}
