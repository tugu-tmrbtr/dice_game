// Global huvisagcid
var activePlayer, scores, roundScore, isNewGame;

// Shoonii zurgiin uzuuleh element iig DOM oos haij olood ened hadgalah
var diceDom = document.querySelector(".dice-1");

// Togloomiig ehluuleh
initGame();

function initGame() {
  // Togloom ehellee gdg tuluw oruulna
  isNewGame = true;

  // Toglogchiin eeljiig hadgalah huvsagc, 1r Player 0, 2r Player 1
  activePlayer = 0;

  // Toglogchdiin tsugluulsan onoog hadgalah huvsagc
  scores = [0, 0];

  // Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvsagc
  roundScore = 0;

  // App ehlehed beldeh
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Toglogcdiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  // Web ehlehd shoo alga baih
  diceDom.style.display = "none";
}

// Shoo shideh eventlistener1
document.querySelector(".btn-roll").addEventListener("click", function () {
  // if (isNewGame === true)
  if (isNewGame) {
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
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 1 buusan tul toglogciin eeljiig solih
      switchNextPlayer();
    }
  } else {
    alert("Game over!!! Press NEW GAME button");
  }
});

// Hold button eventlistener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // Ug toglociin tsugluulsn eeljiin onoog global onoon deer nemne
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Delgets deer onoog n uurcilnu
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Ug toglogc hojson esehiig shalgah
    if (scores[activePlayer] >= 100) {
      // Togloomiig duussan tuluwt oruunla
      isNewGame = false;

      // Yalagc gsn txt iig nerniihn orond gargana
      document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.toggle("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // Eeljiin onoog 0 bolgono
      switchNextPlayer();
    }
  } else {
    alert("Game over!!! Press NEW GAME button");
  }
});

// Ene funtion n toglogciin eeljiig shiljuulne
function switchNextPlayer() {
  // Eeljiin onoog 0 bolgono
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Toglogciin eeljiig solih
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Ulaaniig shiljuune
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Shoog tur alga bolgoh
  diceDom.style.display = "none";
}

// Shine toglom ehluuleh eventlistener = initGame
document.querySelector(".btn-new").addEventListener("click", initGame);
