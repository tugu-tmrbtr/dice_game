// Toglogchiin eeljiig hadgalah huvsagc, 1r Player 0, 2r Player 1
var activePlayer = 1;

// Toglogchdiin tsugluulsan onoog hadgalah huvsagc
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvsagc
var roundScore = 0;

// App ehlehed beldeh
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  // Shoonii ali talaaraa buusang hadgalah huvsagc, 1 - 6 hurtelh utga random oor uugnu
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "./img/dice-" + diceNumber + ".png";
});
