

// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//var letters = ["a", "s", "i", "t", "n", "o", "h", "e", "r", "g", "l", "m"]
var wordsToGuess = ["abc"]
var user = document.getElementById("user-guess");
var numberWins = document.getElementById("number-wins");
var numberLosses = document.getElementById("number-losses");
var actualWord = document.getElementById("actual-word");
var winsCounter = 0;
var lossesCounter = 10;
var outcome = document.getElementById("outcome");
// var lettersGuessed = document.getElementById("lettersGuessed")

//asitnoherglm

document.onkeypress = function(event) {
     var userGuess = event.key;
     user.textContent = event.key;

    //  if (userGuess === "a" || userGuess === "s" || userGuess === "i" || userGuess === "t"
    //  || userGuess === "n" || userGuess === "o" || userGuess === "h" || userGuess === "e"
    //  || userGuess === "r" || userGuess === "g" || userGuess === "l" || userGuess === "m"){
    if (userGuess === "a" || userGuess === "b" || userGuess === "c") {
       console.log("Correct!");
       outcome.textContent = "Correct!";
       numberWins.textContent = (winsCounter=winsCounter+1);
     }
     else {
       console.log("Incorrect");
       outcome.textContent = "Incorrect!";
       numberLosses.textContent = (lossesCounter=lossesCounter-1);
    //    lettersGuessed.textContent = 
     } 

    //  if (lossesCounter === 0) {
    //      outcome.textContent: "you're done";
    //  }
    
}

//  first ask for letter
//  compare this letter to the letters in the word
//  if the letter matches a letter in the word, show all portions where that letter occurs
//  if the letter does not match, take away one life and list the letter that was guessed on the bottom



// var wordsToGuess = ["abc"];
// var wins = 0;
// var losses = 0;
// var guessesRemaining = 10;
// var lettersGuessed = [];
// var randomWord = [];
// var word = [];

// document.onkeyup = function(event) {
//     randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.lenth)];
//     console.log(randomWord);

//     for (var i=0; i<randomWord.length;i++) {
//         word[i] = "_";
//     }
//     console.log(word);
//     document.getElementById


// }