var words = ["bears", "beets", "wuphf", "dundies", "tuna", "flonkerton", "scarn", "cornell"];
var wrongLetters = [];
var letterBank = [];
var emptyWord = [];
var guesses = 10;
var userGuess = document.getElementById("guess");
var wrongBox = document.getElementById("wrongGuess");
var display = document.getElementById("displayBank");
var result = document.getElementById("result");
var guess = document.getElementById("chance");
var randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);

for (var i=0; i<randomWord.length;i++) {
    emptyWord.push("_");
}

console.log(emptyWord);

// display.textContent = emptyWord;
