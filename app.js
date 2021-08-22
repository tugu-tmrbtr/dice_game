// Toglogchiin eeljiig hadgalah huvsagc, 1r Player 0, 2r Player 1
var activePlayer = 1;

// Toglogchdiin tsugluulsan onoog hadgalah huvsagc
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvsagc
var roundScore = 0;

// Shoonii ali talaaraa buusang hadgalah huvsagc, 1 - 6 hurtelh utga random oor uugnu
var diceNumber = Math.floor(Math.random() * 6) + 1;

// App ehlehed beldeh
document.querySelector(".dice").style.display = "none";

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

console.log("Dice :" + dice);
