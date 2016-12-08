var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location1 + 2;
var guess; //  для номера текущей попытки
var lastGuess;
var hits = 0; // переменную для количества попаданий
var guesses = 0; // переменную для количества попыток
var isSunk = false;


while (isSunk === false) {
    lastGuess = guess;
    guess = +prompt("введите  первую координату выстрела ");
    console.log("lastGuess " + lastGuess);
    console.log("guess " + guess);

    if (guess < 0 || guess > 6) {
        console.log("Please enter a valid cell number")
    } else {
        guesses++;


        if ((guess === location1) || (guess === location2) || (guess === location3)){
            if (guess !== lastGuess) {
                alert("Hit!");
                hits++;
                console.log(hits);
                if (hits === 3) {
                    isSunk = true;
                    console.log("You sank my battleship!");
                }
            } else {
                alert("you have already shooted in this cell");
            }

        } else {
            alert("Miss!");
        }
    }
}
var stats = "You took " + guesses +
    " guesses to sink the battleship, " +
    "which means your shooting accuracy was " +
    (3 / guesses);
console.log(stats);