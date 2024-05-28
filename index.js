//legger boxshadow til på mousehover
const playGame = document.getElementById("play")
playGame.addEventListener("mouseover", border)
function border(){
    playGame.style.boxShadow = "0 0 100px rgb(208, 87, 91)"
}
playGame.addEventListener("mouseout", borderOut)
function borderOut(){
    playGame.style.boxShadow = "none"
}

playGame.addEventListener("click", goToCharacterSelect)
function goToCharacterSelect(){
    console.log("funk")
    window.location.href = 'CharacterSelect/characterSelect.html';
    
}