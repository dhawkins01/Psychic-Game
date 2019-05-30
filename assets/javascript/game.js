
// Global Variables....

// Create an array with all the choices, which is the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// set our initial values for our variables
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;

// create an empty array that will be filled in by the users guesses
var guessesSoFar = [];
var computerGuess;

// Functions....

// this function picks a random letter from the alphabet array
var newLetter = function() {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    
};

// this function takes the guess that the user inputs, adds then to the guessesSoFar array, and then prints it on the <p id="guesses"> in the html
var soFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(","); 
};

// this function prints the amount of guesses left in the <p id="left"> in the html
var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};

// This function resets the counters and picks a new letter when the user runs out of guesses
var newGame = function() {
	
    left = 9;
    newLetter();
    guessesLeft();
    soFar();
    guessesSoFar = [];
    
}

// This function detects the letter the user presses, decreses the guesses left, compares the users guess
// to the computers guess, and either adds to the wins counter or the losses counter
// also calls the newGame function if either the user guesses the right letter, or runs out of guesses

document.onkeyup = function(event) {
	var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();
    if (left > 0) {
        if (userGuess == computerGuess) {
        	wins++;
        	document.getElementById("wins").innerHTML = "Wins:" + wins;
            newGame();
        }
    } else if (left == 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = "Losses:" + losses;
        newGame();
    }
};