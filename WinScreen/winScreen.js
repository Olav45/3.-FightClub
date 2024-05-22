const player1Image = document.getElementById("player1")
const player2Image = document.getElementById("player2")
const winTekst = document.getElementById("winTekst")

let player1Character;
let player2Character;

//henter hvem som vant
let playerWon = sessionStorage.getItem('whichPlayerWon')
console.log(playerWon)

if(playerWon == 1){
    winTekst.style.color = "blue"
    winTekst.innerHTML = "Player 1 is the winner!"
    player2Image.style.animation = "rotateRight 2s linear forwards"
}
if(playerWon == 2){
    winTekst.style.color = "red"
    winTekst.innerHTML = "Player 2 is the winner!"
    player1Image.style.animation = "rotateLeft 2s linear forwards"
}

//henter hvilken character spiller 1 var
let characterChosen = sessionStorage.getItem('player1Character')
console.log(characterChosen)
if(characterChosen == 1){
    player1Image.src = "bilder/tarzanUtenBak.png"
    player1Image.style.width = "100px"
    player1Image.style.height = "120px"
}
else if(characterChosen == 2){
    player1Image.src = "bilder/donkeykong.png"
    player1Image.style.width = "100px"
    player1Image.style.height = "180px"
}
else{
    player1Image.src = "bilder/archer.png"
    player1Image.style.width = "150px"
    player1Image.style.height = "100px"
}

//henter hvilken character spiller 2 var
let player2CharacterChosen = sessionStorage.getItem('player2Character')
console.log(player2CharacterChosen)
if(player2CharacterChosen == 1){
    player2Image.src = "bilder/tarzanUtenBak.png"
    player2Image.style.width = "100px"
    player2Image.style.height = "120px"
}
else if(player2CharacterChosen == 2){
    player2Image.src = "bilder/donkeykong.png"
    player2Image.style.width = "100px"
    player2Image.style.height = "180px"
}
else{
    player2Image.src = "bilder/archer.png"
    player2Image.style.width = "150px"
    player2Image.style.height = "100px"
}