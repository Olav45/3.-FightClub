
let player = 1;
let playerOneCharacter = 0;
let playerTwoCharacter = 0;
let havePlayerSelected = false;

const explanationTekst = document.getElementById("explain");

const eElm = document.querySelectorAll(".e");
const rElm = document.querySelectorAll(".r");
const fElm = document.querySelectorAll(".f");

//endrer hvilke taster som blir vist for å utføre angrep avhengig av hvilken spiller det er sin tur til å velge
function player2Selection() {
    if (player === 1) {
        eElm.forEach(element => {
            element.innerHTML = "[E]";
        });
    } else {
        eElm.forEach(element => {
            element.innerHTML = "[@]";
        });
    }
    if (player === 1) {
        rElm.forEach(element => {
            element.innerHTML = "[R]";
        });
    } else {
        rElm.forEach(element => {
            element.innerHTML = "[-]";
        });
    }
    if (player === 1) {
        fElm.forEach(element => {
            element.innerHTML = "[F]";
        });
    } else {
        fElm.forEach(element => {
            element.innerHTML = "[.]";
        });
    }
}

function player2Turn() {
    explanationTekst.innerHTML = "Player 2´s turn to select. Select by pressing on your desired character´s Icon!";
}

function goToGame() {
    explanationTekst.innerHTML = "<button id='play'>Play Game!</button>";
    const playGame = document.getElementById("play");
    playGame.addEventListener("click", gameStart);
}

const tarzanSelector = document.getElementById("tarzanSelect");
const donkeykongSelector = document.getElementById("donkeykongSelect");
const archerSelector = document.getElementById("archerSelect");
let tarzanTimeout;
let donkeykongTimeout;
let archerTimeout;

tarzanSelector.addEventListener("click", tarzanChoise);

function tarzanChoise() {
    donkeykongSelector.style.border = "5px solid black";
    archerSelector.style.border = "5px solid black";
    if (playerTwoCharacter === 1) {
        havePlayerSelected = true;
        setTimeout(goToGame, 2000);
        explanationTekst.innerHTML = "Player 2 selected Tarzan!";
        tarzanSelector.removeEventListener("click", tarzanChoise);
        donkeykongSelector.removeEventListener("click", donkeykongChoise);
        archerSelector.removeEventListener("click", archerChoise);
    }
    if (player === 2 && !havePlayerSelected) {
        playerTwoCharacter = 1;
        tarzanSelector.style.border = "5px solid red";
        explanationTekst.innerHTML = "Player 2´s turn to select. Tarzan is Selected! Press Again to confirm your selection!";
        clearTimeout(tarzanTimeout);
        clearTimeout(donkeykongTimeout);
        clearTimeout(archerTimeout);
    }
    if (playerOneCharacter === 1 && player === 1) {
        player = 2;
        playerTwoCharacter = 0;
        tarzanSelector.style.border = "5px solid black";
        explanationTekst.innerHTML = "Player 1 selected Tarzan!";
        tarzanTimeout = setTimeout(player2Turn, 1000);
        player2Selection();
    }
    if (player === 1) {
        tarzanSelector.style.border = "5px solid blue";
        explanationTekst.innerHTML = "Player 1´s turn to select. Tarzan is Selected! Press Again to confirm your selection!";
        playerOneCharacter = 1;
    }
    if (player === 2 && playerTwoCharacter === 0) {
        tarzanSelector.style.border = "5px solid black";
    }
    console.log(havePlayerSelected);
}

donkeykongSelector.addEventListener("click", donkeykongChoise);

function donkeykongChoise() {
    tarzanSelector.style.border = "5px solid black";
    archerSelector.style.border = "5px solid black";
    if (playerTwoCharacter === 2) {
        havePlayerSelected = true;
        explanationTekst.innerHTML = "Player 2 selected Donkeykong!";
        donkeykongTimeout = setTimeout(goToGame, 2000);
        tarzanSelector.removeEventListener("click", tarzanChoise);
        donkeykongSelector.removeEventListener("click", donkeykongChoise);
        archerSelector.removeEventListener("click", archerChoise);
        donkeykongSelector.style.border = "5px solid black";
    }
    if (player === 2 && !havePlayerSelected) {
        playerTwoCharacter = 2;
        donkeykongSelector.style.border = "5px solid red";
        explanationTekst.innerHTML = "Player 2´s turn to select. Donkeykong is Selected! Press Again to confirm your selection!";
        clearTimeout(tarzanTimeout);
        clearTimeout(donkeykongTimeout);
        clearTimeout(archerTimeout);
    }
    if (playerOneCharacter === 2 && player === 1) {
        player = 2;
        playerTwoCharacter = 0;
        donkeykongSelector.style.border = "5px solid black";
        explanationTekst.innerHTML = "Player 1 selected Donkeykong!";
        donkeykongTimeout = setTimeout(player2Turn, 1000);
        player2Selection();
    }
    if (player === 1) {
        donkeykongSelector.style.border = "5px solid blue";
        explanationTekst.innerHTML = "Player 1´s turn to select. Donkeykong is Selected! Press Again to confirm your selection!";
        playerOneCharacter = 2;
    }
    if (player === 2 && playerTwoCharacter === 0) {
        donkeykongSelector.style.border = "5px solid black";
    }
    console.log(havePlayerSelected);
}

archerSelector.addEventListener("click", archerChoise);

function archerChoise() {
    tarzanSelector.style.border = "5px solid black";
    donkeykongSelector.style.border = "5px solid black";
    if (playerTwoCharacter === 3) {
        havePlayerSelected = true;
        explanationTekst.innerHTML = "Player 2 selected Archer!";
        archerTimeout = setTimeout(goToGame, 2000);
        tarzanSelector.removeEventListener("click", tarzanChoise);
        donkeykongSelector.removeEventListener("click", donkeykongChoise);
        archerSelector.removeEventListener("click", archerChoise);
        archerSelector.style.border = "5px solid black";
    }
    if (player === 2 && !havePlayerSelected) {
        playerTwoCharacter = 3;
        archerSelector.style.border = "5px solid red";
        explanationTekst.innerHTML = "Player 2´s turn to select. Archer is Selected! Press Again to confirm your selection!";
        clearTimeout(tarzanTimeout);
        clearTimeout(donkeykongTimeout);
        clearTimeout(archerTimeout);
    }
    if (playerOneCharacter === 3 && player === 1) {
        player = 2;
        playerTwoCharacter = 0;
        archerSelector.style.border = "5px solid black";
        explanationTekst.innerHTML = "Player 1 selected Archer!";
        archerTimeout = setTimeout(player2Turn, 1000);
        player2Selection();
    }
    if (player === 1) {
        archerSelector.style.border = "5px solid blue";
        explanationTekst.innerHTML = "Player 1´s turn to select. Archer is Selected! Press Again to confirm your selection!";
        playerOneCharacter = 3;
    }
    if (player === 2 && playerTwoCharacter === 0) {
        archerSelector.style.border = "5px solid black";
    }
    console.log(havePlayerSelected);
}

function checkForSelected() {
    console.log("player 1", playerOneCharacter);
    console.log("player 2", playerTwoCharacter);
}
setInterval(checkForSelected, 2000);

//lagrer hvilke spillere som er valgt og sender til hovedsiden
function gameStart() {
    sessionStorage.setItem('player1Character', playerOneCharacter)
    sessionStorage.setItem('player2Character', playerTwoCharacter)
    window.location.href = '../FightClubMain/Fightclub.html';
    console.log("funk");
}

const howPlay = document.getElementById("howTo")
howPlay.addEventListener("click", goToHowToPlay)
function goToHowToPlay(){
    window.location.href = '../HowToPlay/HowToPlay.html'
}