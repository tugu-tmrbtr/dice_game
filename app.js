// Toglogchiin eeljiig hadgalah huivsagch, 1r toglogch 0, 2r togloch 1.
var activePlayer = 1;

// Toglogchdiin tsugluulsan onoog hadgalah huivsagch
var scores = [0, 0];

// Toglogchiin eeljindee tugluulj baigaa onoog hadgalah huivsagch
var roundScore = 0;

// Shoonii ali talaar buusniig hadgalah huivsagch, 1-6 gesen utgiig ene huivsagchid randomoor uusgej ugnu
// var diceNumber = Math.floor(Math.random() * 6) + 1;

// Programm ehlehed beltgey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDOM = document.querySelector(".dice");
diceDOM.style.display = "none";

//                                                         Anonymous Function
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Dice iin zurag solih
  diceDOM.style.display = "block™";
  diceDOM.src = "./img/dice-" + diceNumber + ".png";
});
