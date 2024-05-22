// Automatisk scrolling
document.getElementById('leftRight').addEventListener('click', function() {
    document.getElementById('leftRightTarget').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('jump').addEventListener('click', function() {
    document.getElementById('jumpTarget').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('melee').addEventListener('click', function() {
    document.getElementById('meleeTarget').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('projectile').addEventListener('click', function() {
    document.getElementById('projectileTarget').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('ultimate').addEventListener('click', function() {
    document.getElementById('ultimateTarget').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('health').addEventListener('click', function() {
    document.getElementById('healthTarget').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('lives').addEventListener('click', function() {
    document.getElementById('livesTarget').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('goGame').addEventListener('click', function() {
    document.getElementById('goGameTarget').scrollIntoView({ behavior: 'smooth' });
});

const startGame = document.getElementById("play")
startGame.addEventListener("click", goToCharacterSelect)

function goToCharacterSelect(){
    window.location.href = '../CharacterSelect/characterSelect.html'
}