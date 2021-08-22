// Toglogchiin eeljiig hadgalah huvsagc, 1r Player 0, 2r Player 1
var activePlayer = 0;

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
// Web ehlehd shoo alga baih
diceDom.style.display = "none";

// Shoo shideh eventlistener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // Shoonii ali talaaraa buusang hadgalah huvsagc, 1 - 6 hurtelh utga random oor uugnu
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Shoonii zurgiig web deer gargah
  diceDom.style.display = "block";

  // Buusan shoonii toog web deer hargalzah zurgiin daguu gargaj irnee
  diceDom.src = "./img/dice-" + diceNumber + ".png";

  // Buusan too n 1-ees ylgaata bol active player iin eeljiin toog nemegduulne
  if (diceNumber !== 1) {
    // 1-ees ylgaata too buula. Buusan toog toglogcid nemj ugnu
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogciin eeljiig solih

    // Ene toglogciin eeljindee tsugluulsn onoog 0 bolgoh
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Toglogciin eeljiig shiljuuleh
    // Herew active player 0 bwl active player iig 1 bolog
    // Ug bol active player 0 bolog
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // if (activePlayer == 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }

    // Ulaaniig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Shoog tur alga bolgoh
    diceDom.style.display = "none";
  }
});
