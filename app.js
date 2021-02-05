// Toglogchiin eeljiig hadgalah huivsagch, 1r toglogch 0, 2r togloch 1.
var activePlayer = 1;

// Toglogchdiin tsugluulsan onoog hadgalah huivsagch
var scores = [0, 0];

// Toglogchiin eeljindee tugluulj baigaa onoog hadgalah huivsagch
var roundScore = 0;

// Shoonii ali talaar buusniig hadgalah huivsagch, 1-6 gesen utgiig ene huivsagchid randomoor uusgej ugnu
var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>HEHE</em>";

// Programm ehlehed beltgey
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Shoo : " + dice);