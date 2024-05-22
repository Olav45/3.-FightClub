const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 1000
canvas.height = 500

// NB: Mye code blir repetert for player 2. vet det ikke er optimalt, men slet veldig med å få det til å funke med annerledes code så jeg gjorde det jeg fikk til

//Characters
//Player 1
//alle characterer har samme informasjon bare ulike verdier
const allRound = {
    x: 50, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 50, // bredde
    height: 100, // høyde
    color: 'transparent', // farge
    speed: 3, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 6, //tyngdekraft
    jumpheight: 5, //hvor høyt characteren hopper
    health: 200, //health
    healthreset: 200, //resetter health
    lives: 3, //liv
    ultCharge: 0, //ultimate angrep charge(øker når du treffer motstanderen med angrep)
    imageWidth: 100, //passer på at bilde er like stort og blir plassert oppå rektangelet
    imageHeight: 120, //passer på at bilde er like stort og blir plassert oppå rektangelet
    imageOffsetX: 30, //passer på at bilde er like stort og blir plassert oppå rektangelet
    imageOffsetY: 10, //passer på at bilde er like stort og blir plassert oppå rektangelet
    src: 'bilder/tarzanUtenBak.png', //url til bilde
};
const coconutThrow = {
    x: 300, //  x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 40, // bredde
    height: 40, // høyde
    color: "transparent", //farge
    projSpeed: 5, //fart
    x_velocity: 0,
    gravity: 1, //tyngdekraft
    y_velocity: 0,
    y_startvelocity: 1, //vertikal startfart
    damage: 10, // skade
    ultPoints: 10, // hvor mye den lader ultcharge
    imageWidth: 50, //passer på at bilde er like stort og blir plassert oppå rektangelet
    imageHeight: 50, //passer på at bilde er like stort og blir plassert oppå rektangelet
    imageOffsetX: 5, //passer på at bilde er like stort og blir plassert oppå rektangelet
    imageOffsetY: 10, //passer på at bilde er like stort og blir plassert oppå rektangelet
    src: 'bilder/coconut.png', //url til bilde

}
const whip = {
    x: allRound.x + allRound.width,
    y: allRound.y + allRound.height / 4,
    width: 50,
    height: 30,
    color: "transparent",
    damage: 15,
    ultPoints: 10,
    imageWidth: 100,
    imageHeight: 120,
    imageOffsetX: 30,
    imageOffsetY: 10,
    src: 'bilder/whip.png',
}
const junglePunch = {
    x: allRound.x + allRound.width,
    y: allRound.y + allRound.height / 4,
    width: 100,
    height: 50,
    color: "transparent",
    damage: 40,
    imageWidth: 100,
    imageHeight: 100,
    imageOffsetX: 0,
    imageOffsetY: 40,
    src: 'bilder/junglePunch.png',
}

const tank = {
    x: 50, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 80, // bredde
    height: 130, // høyde
    color: 'transparent', // fyllfarge
    speed: 2, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 10,
    jumpheight: 3,
    health: 270,
    healthreset: 270,
    lives: 3,
    ultCharge: 0,
    imageWidth: 100,
    imageHeight: 180,
    imageOffsetX: 15,
    imageOffsetY: 30,
    src: 'bilder/donkeykong.png',
}
const rockThrow = {
    x: tank.x,
    y: tank.y,
    width: 50, // bredde
    height: 50, // høyde
    color: "transparent",
    projSpeed: 5,
    x_velocity: 0,
    gravity: 6,
    y_velocity: 0,
    y_startvelocity: 5,
    damage: 10,
    ultPoints: 15,
    imageWidth: 70,
    imageHeight: 70,
    imageOffsetX: 0,
    imageOffsetY: 10,
    src: 'bilder/stone.png',
}
const punch = {
    x: tank.x + tank.width,
    y: tank.y + tank.height / 4,
    width: 60,
    height: 60,
    color: "transparent",
    damage: 24,
    ultPoints: 10,
    imageWidth: 70,
    imageHeight: 80,
    imageOffsetX: 0,
    imageOffsetY: 10,
    src: 'bilder/punch.png',
}
const smashPunch = {
    x: tank.x + tank.width,
    y: tank.y + tank.height / 4,
    width: 100,
    height: 100,
    color: "transparent",
    damage: 60,
    imageWidth: 100,
    imageHeight: 100,
    imageOffsetX: 0,
    imageOffsetY: 10,
    src: 'bilder/smashPunch.png',
}

const archer = {
    x: 50, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 40, // bredde
    height: 80, // høyde
    color: 'transparent', // fyllfarge
    speed: 4, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 4,
    jumpheight: 6,
    health: 140,
    healthreset: 140,
    lives: 3,
    ultCharge: 0,
    imageWidth: 150,
    imageHeight: 100,
    imageOffsetX: 50,
    imageOffsetY: 20,
    src: 'bilder/archer.png',

}
const arrow = {
    x: archer.x,
    y: archer.y,
    width: 50,
    height: 20,
    color: "transparent",
    projSpeed: 7,
    x_velocity: 0,
    gravity: 0,
    y_velocity: 0,
    y_startvelocity: 0,
    damage: 15,
    ultPoints: 15,
    imageWidth: 60,
    imageHeight: 60,
    imageOffsetX: 10,
    imageOffsetY: 20,
    src: 'bilder/arrow.png',
}
const bowPunch = {
    x: archer.x,
    y: archer.y,
    width: 20,
    height: 20,
    color: "transparent",
    damage: 15,
    ultPoints: 15,
    imageWidth: 40,
    imageHeight: 40,
    imageOffsetX: 0,
    imageOffsetY: 10,
    src: 'bilder/knife.png',
}
const flamingArrow = {
    x: archer.x,
    y: archer.y,
    width: 60,
    height: 30,
    color: "transparent",
    projSpeed: 12,
    x_velocity: 0,
    gravity: 0,
    y_velocity: 0,
    y_startvelocity: 0,
    damage: 45,
    imageWidth: 90,
    imageHeight: 70,
    imageOffsetX: 25,
    imageOffsetY: 25,
    src: 'bilder/flamingArrow.png',
}
//Player 2
const allRoundPlayer2 = {
    x: canvas.width - 100, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 50, // bredde
    height: 100, // høyde
    color: 'transparent', // fyllfarge
    speed: 3, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 6,
    jumpheight: 5,
    health: 200,
    healthreset: 200,
    lives: 3,
    ultCharge: 0,
    imageWidth: 100,
    imageHeight: 120,
    imageOffsetX: 30,
    imageOffsetY: 10,
    src: 'bilder/tarzanUtenBak.png',
};
const coconutThrowPlayer2 = {
    x: 300,
    y: canvas.height / 2,
    width: 40, // bredde
    height: 40, // høyde
    color: "transparent",
    projSpeed: 5,
    x_velocity: 0,
    gravity: 1,
    y_velocity: 0,
    y_startvelocity: 1,
    damage: 10,
    ultPoints: 10,
    imageWidth: 50,
    imageHeight: 50,
    imageOffsetX: 5,
    imageOffsetY: 10,
    src: 'bilder/coconut.png',

}
const whipPlayer2 = {
    x: allRound.x,
    y: allRound.y,
    width: 50,
    height: 30,
    color: "transparent",
    damage: 15,
    ultPoints: 10,
    imageWidth: 100,
    imageHeight: 120,
    imageOffsetX: 30,
    imageOffsetY: 10,
    src: 'bilder/whip.png',
}
const junglePunchPlayer2 = {
    x: allRound.x + allRound.width,
    y: allRound.y + allRound.height / 4,
    width: 100,
    height: 50,
    color: "transparent",
    damage: 40,
    imageWidth: 100,
    imageHeight: 100,
    imageOffsetX: 0,
    imageOffsetY: 40,
    src: 'bilder/junglePunch.png',
}

const tankPlayer2 = {
    x: canvas.width - 130, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 80, // bredde
    height: 130, // høyde
    color: 'transparent', // fyllfarge
    speed: 2, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 10,
    jumpheight: 3,
    health: 270,
    healthreset: 270,
    lives: 3,
    ultCharge: 0,
    imageWidth: 100,
    imageHeight: 180,
    imageOffsetX: 15,
    imageOffsetY: 30,
    src: 'bilder/donkeykong.png',
}
const rockThrowPlayer2 = {
    x: tank.x,
    y: tank.y,
    width: 50, // bredde
    height: 50, // høyde
    color: "transparent",
    projSpeed: 5,
    x_velocity: 0,
    gravity: 6,
    y_velocity: 0,
    y_startvelocity: 5,
    damage: 10,
    ultPoints: 15,
    imageWidth: 70,
    imageHeight: 70,
    imageOffsetX: 0,
    imageOffsetY: 10,
    src: 'bilder/stone.png',


}
const punchPlayer2 = {
    x: tank.x,
    y: tank.y,
    width: 60,
    height: 60,
    color: "transparent",
    damage: 20,
    ultPoints: 10,
    imageWidth: 70,
    imageHeight: 80,
    imageOffsetX: 0,
    imageOffsetY: 10,
    src: 'bilder/punch.png',
}
const smashPunchPlayer2 = {
    x: tank.x + tank.width,
    y: tank.y + tank.height / 4,
    width: 100,
    height: 100,
    color: "transparent",
    damage: 60,
    imageWidth: 100,
    imageHeight: 100,
    imageOffsetX: 0,
    imageOffsetY: 10,
    src: 'bilder/smashPunch.png',
}
const archerPlayer2 = {
    x: canvas.width - 90, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 40, // bredde
    height: 80, // høyde
    color: 'transparent', // fyllfarge
    speed: 4, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 4,
    jumpheight: 6,
    health: 140,
    healthreset: 140,
    lives: 3,
    ultCharge: 0,
    imageWidth: 150,
    imageHeight: 100,
    imageOffsetX: 50,
    imageOffsetY: 20,
    src: 'bilder/archer.png',
}
const arrowPlayer2 = {
    x: archer.x,
    y: archer.y,
    width: 40,
    height: 20,
    color: "transparent",
    projSpeed: 7,
    x_velocity: 0,
    gravity: 0,
    y_velocity: 0,
    y_startvelocity: 0,
    damage: 15,
    ultPoints: 15,
    imageWidth: 60,
    imageHeight: 60,
    imageOffsetX: 10,
    imageOffsetY: 20,
    src: 'bilder/arrow.png',
}
const bowPunchPlayer2 = {
    x: archer.x,
    y: archer.y,
    width: 20,
    height: 20,
    color: "transparent",
    damage: 15,
    ultPoints: 15,
    imageWidth: 40,
    imageHeight: 40,
    imageOffsetX: 0,
    imageOffsetY: 10,
    src: 'bilder/knife.png',
}
const flamingArrowPlayer2 = {
    x: archer.x,
    y: archer.y,
    width: 60,
    height: 30,
    color: "transparent",
    projSpeed: 12,
    damage: 45,
    imageWidth: 90,
    imageHeight: 70,
    imageOffsetX: 25,
    imageOffsetY: 25,
    src: 'bilder/flamingArrow.png',
    
}

// Character Select
let projectileChosen = "notpicked"
let player2ProjectileChosen = "notpicked"
let meleeChosen = "notpicked"
let player2MeleeChosen = "notpicked"
let ultimateChosen = "notpicked"
let player2UltimateChosen = "notpicked"
let characterChosen = "notpicked"
let player2CharacterChosen = "notpicked"


//Henter hvilke characterer som ble valgt i characterSelect.html
let characterImport = sessionStorage.getItem('player1Character')
if(characterImport == 1){
    characterChosen = allRound
    projectileChosen = coconutThrow
    meleeChosen = whip
    ultimateChosen = junglePunch
}
else if(characterImport == 2){
    characterChosen = tank
    projectileChosen = rockThrow
    meleeChosen = punch
    ultimateChosen = smashPunch
}
else{
    characterChosen = archer
    projectileChosen = arrow
    meleeChosen = bowPunch
    ultimateChosen = flamingArrow
}
let player2CharacterImport = sessionStorage.getItem('player2Character')
if(player2CharacterImport == 1){
    player2CharacterChosen = allRoundPlayer2
    player2ProjectileChosen = coconutThrowPlayer2
    player2MeleeChosen = whipPlayer2
    player2UltimateChosen = junglePunchPlayer2
}
else if(player2CharacterImport == 2){
    player2CharacterChosen = tankPlayer2
    player2ProjectileChosen = rockThrowPlayer2
    player2MeleeChosen = punchPlayer2
    player2UltimateChosen = smashPunchPlayer2
}
else{
    player2CharacterChosen = archerPlayer2
    player2ProjectileChosen = arrowPlayer2
    player2MeleeChosen = bowPunchPlayer2
    player2UltimateChosen = flamingArrowPlayer2
}

console.log(characterChosen)
console.log(player2CharacterChosen)

//tømmer constant canvasen
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    requestAnimationFrame(clearCanvas);
}
clearCanvas();




//Tegner rectangelene for player 1 og 2

let imgPlayer1 = new Image();
imgPlayer1.src = characterChosen.src; 
imgPlayer1.onload = function() {
    drawRectangle(characterChosen);
};

let imgPlayer2 = new Image();
imgPlayer2.src = player2CharacterChosen.src; 
imgPlayer2.onload = function() {
    drawRectangle(player2CharacterChosen);
};


//Tegner rektangel 1
function drawRectangle(character) {
    ctx.fillStyle = character.color;
    ctx.fillRect(character.x, character.y, character.width, character.height); 
    
    //tegner bilde på rektangelet
    if (isLookingRight) {
        ctx.drawImage(imgPlayer1, character.x - character.imageOffsetX, character.y - character.imageOffsetY, character.imageWidth, character.imageHeight);
    } else {
        // Speiler bilde hvis den ser mot venstre
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(imgPlayer1, -(character.x + character.imageWidth) + character.imageOffsetX, character.y - character.imageOffsetY, character.imageWidth, character.imageHeight);
        ctx.restore();
    }
}

//Tegner rektangel 2
function player2DrawRectangle(player2Character) {
    ctx.fillStyle = player2Character.color;
    ctx.fillRect(player2Character.x, player2Character.y, player2Character.width, player2Character.height); 
    
      //tegner bilde på rektangelet
    if (player2IsLookingRight) {
        ctx.drawImage(imgPlayer2, player2Character.x - player2Character.imageOffsetX, player2Character.y - player2Character.imageOffsetY, player2Character.imageWidth, player2Character.imageHeight);
    } else {
        // Speiler bilde hvis characteren ser mot høyre
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(imgPlayer2, -(player2Character.x + player2Character.imageWidth) + player2Character.imageOffsetX, player2Character.y - player2Character.imageOffsetY, player2Character.imageWidth, player2Character.imageHeight);
        ctx.restore();
    }
}
// Gjør sånn at man tar skade hvis man er utenfor spill området
let damageOutsideMap = 5

function passiveMapDamage(){
    if(characterChosen.x < 0 || characterChosen.x > canvas.width){
        characterChosen.health -= damageOutsideMap
    }
    if(player2CharacterChosen.x < 0 || player2CharacterChosen.x > canvas.width){
        player2CharacterChosen.health -= damageOutsideMap
    }
    healthDisplayUpdate()
    checkForDead()
}
setInterval(passiveMapDamage, 500)
//Movement
let isLookingRight = true
let player2IsLookingRight = false


function movement() {

   
    
    //player 1
    //Right (bevegelse mot høyre)

    let animationRight; //brukes for å cancelAnimationframe
    let isDpressed = false //passer på at moveRight funksjon bare kjøres en gang når man holder nede d(hvis ikke vil characteren aksellerere)

    function moveRight() { 
        characterChosen.x += characterChosen.speed
        drawRectangle(characterChosen)
        animationRight = requestAnimationFrame(moveRight)
        if (projectileActive) {
            drawProjectileRect(projectileChosen)
        }
    }
    document.addEventListener("keydown", function (event) {
        if (event.key === 'd' || event.key === 'D') {
            if (!isDpressed) {
                moveRight()
                isDpressed = true;
                isLookingRight = true
                

            }
        }
    });
    document.addEventListener("keyup", function (event) {
        if (event.key === 'd' || event.key === 'D') {

            cancelAnimationFrame(animationRight)
            characterChosen.x_velocity = 0
            isDpressed = false
        }
    });


    //Left (bevegelse mot venstre)
    let animationLeft; //brukes for å cancelAnimationframe
    let isApressed = false //passer på at moveLeft funksjon bare kjøres en gang når man holder nede a(hvis ikke vil characteren aksellerere)

    function moveLeft() {
        characterChosen.x -= characterChosen.speed
        drawRectangle(characterChosen)
        animationLeft = requestAnimationFrame(moveLeft)
        if (projectileActive) {
            drawProjectileRect(projectileChosen)
        }
    }
    document.addEventListener("keydown", function (event) {
        if (event.key === 'a' || event.key === 'A') {
            if (!isApressed) {
                moveLeft()
                isApressed = true;
                isLookingRight = false

            }
        }
    });
    document.addEventListener("keyup", function (event) {
        if (event.key === 'a' || event.key === 'A') {

            cancelAnimationFrame(animationLeft)
            isApressed = false
        }
    });

    //jump

    
    let jumpArr = ["jump", "jump"] //bruker array for å lagre antall hopp
    let isWpressed = false //passer på at jump funksjon bare kjøres en gang når man holder nede w(hvis ikke vil characteren aksellerere)
    let isJumpStopped = false //passer på at jump bare blir stoppa en gang
    let isJumpActive = false // 





    let animationJump; //brukes for cancelAnimationframe
    let timeooutId; // brukes for clearTimeout

    function stopJump() {
        if (!isJumpActive) {
            cancelAnimationFrame(animationJump)
            isWpressed = false
            jumpArr.shift()
            isJumpStopped = true
            isJumpActive = true
        }


    }

    function jump() {

        characterChosen.y_velocity = 0
        characterChosen.y_velocity = characterChosen.jumpheight
        characterChosen.y -= characterChosen.y_velocity
        drawRectangle(characterChosen)
        animationJump = requestAnimationFrame(jump)
        if (projectileActive) {
            drawProjectileRect(projectileChosen)
        }


    }

    document.addEventListener("keydown", function (event) {
        if (!isJumpStopped && (event.key === 'w' || event.key === 'W')) {
            if (!isWpressed && jumpArr.length > 0) {
                jump()
                isWpressed = true;
                timeooutId = setTimeout(stopJump, 500)
                console.log("charcter ser", isLookingRight)


            }

        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.key === 'w' || event.key === 'W') {

            clearTimeout(timeooutId)
            stopJump()
            isJumpStopped = false
            isJumpActive = false


        }
    });



    //gravity

    function tyngdekraft() {
        if (characterChosen.y < canvas.height - characterChosen.height && !isWpressed) {
            characterChosen.y_velocity = characterChosen.gravity
            characterChosen.y += characterChosen.y_velocity
        }
        else if (characterChosen.y >= canvas.height - characterChosen.height) { //gjør at man får to hopp når man er på bakken
            if (jumpArr.length === 0) {
                jumpArr.push("jump", "jump")
            }

            if (jumpArr.length === 1) {
                jumpArr.push("jump")
            }

        }
        else {
            y_velocity = 0

        }
    }
    function gravityCharacter() {
        tyngdekraft()
        drawRectangle(characterChosen)
        requestAnimationFrame(gravityCharacter)

    }
    gravityCharacter()

    //player 2 (samme bevegelses kode for spiller 2)
    //Right
    let player2AnimationRight;
    let player2IsDpressed = false

    function player2MoveRight() {
        player2CharacterChosen.x_velocity = player2CharacterChosen.speed
        player2CharacterChosen.x += player2CharacterChosen.speed
        player2DrawRectangle(player2CharacterChosen)
        player2AnimationRight = requestAnimationFrame(player2MoveRight)
        if (player2ProjectileActive) {
            player2DrawProjectileRect(player2ProjectileChosen)
        }
    }
    document.addEventListener("keydown", function (event) {
        if (event.key === 'ArrowRight') {
            if (!player2IsDpressed) {
                player2MoveRight()
                player2IsDpressed = true;
                player2IsLookingRight = true
            }
        }
    });
    document.addEventListener("keyup", function (event) {
        if (event.key === 'ArrowRight') {

            cancelAnimationFrame(player2AnimationRight)
            player2CharacterChosen.x_velocity = 0
            player2IsDpressed = false
        }
    });

    //Left
    let player2AnimationLeft;
    let player2IsApressed = false

    function player2MoveLeft() {
        player2CharacterChosen.x_velocity = player2CharacterChosen.speed
        player2CharacterChosen.x -= player2CharacterChosen.speed
        player2DrawRectangle(player2CharacterChosen)
        player2AnimationLeft = requestAnimationFrame(player2MoveLeft)
        if (player2ProjectileActive) {
            player2DrawProjectileRect(player2ProjectileChosen)
        }
    }
    document.addEventListener("keydown", function (event) {
        if (event.key === 'ArrowLeft') {
            if (!player2IsApressed) {
                player2MoveLeft()
                player2IsApressed = true;
                player2IsLookingRight = false

            }
        }
    });
    document.addEventListener("keyup", function (event) {
        if (event.key === 'ArrowLeft') {

            cancelAnimationFrame(player2AnimationLeft)
            player2IsApressed = false
        }
    });

    //jump

    let player2JumpArr = ["jump", "jump"]
    let player2isWpressed = false
    let player2isJumpStopped = false
    let player2isJumpActive = false





    let player2animationJump;
    let player2timeooutId;

    function player2StopJump() {
        if (!player2isJumpActive) {
            cancelAnimationFrame(player2animationJump)
            player2isWpressed = false
            player2JumpArr.shift()
            player2isJumpStopped = true
            player2isJumpActive = true
        }


    }

    function player2Jump() {

        player2CharacterChosen.y_velocity = 0
        player2CharacterChosen.y_velocity = player2CharacterChosen.jumpheight
        player2CharacterChosen.y -= player2CharacterChosen.y_velocity
        player2DrawRectangle(player2CharacterChosen)
        player2animationJump = requestAnimationFrame(player2Jump)
        if (player2ProjectileActive) {
            player2DrawProjectileRect(player2ProjectileChosen)
        }


    }

    document.addEventListener("keydown", function (event) {
        if (!player2isJumpStopped && (event.key === 'ArrowUp')) {
            if (!player2isWpressed && player2JumpArr.length > 0) {
                player2Jump()
                player2isWpressed = true;
                player2timeooutId = setTimeout(player2StopJump, 500)
                console.log("charcter ser", player2IsLookingRight)


            }

        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.key === 'ArrowUp') {

            clearTimeout(player2timeooutId)
            player2StopJump()
            player2isJumpStopped = false
            player2isJumpActive = false


        }
    });



    //gravity

    function player2Tyngdekraft() {
        if (player2CharacterChosen.y < canvas.height - player2CharacterChosen.height && !player2isWpressed) {
            player2CharacterChosen.y_velocity = player2CharacterChosen.gravity
            player2CharacterChosen.y += player2CharacterChosen.y_velocity
        }
        else if (player2CharacterChosen.y >= canvas.height - player2CharacterChosen.height) {
            if (player2JumpArr.length === 0) {
                player2JumpArr.push("jump", "jump")
            }

            if (player2JumpArr.length === 1) {
                player2JumpArr.push("jump")
            }

        }
        else {
            y_velocity = 0

        }
    }
    function player2GravityCharacter() {
        player2Tyngdekraft()
        player2DrawRectangle(player2CharacterChosen)
        requestAnimationFrame(player2GravityCharacter)

    }
    player2GravityCharacter()

}


// Projectiles
//player 1

let projectileImgPlayer1 = new Image();
projectileImgPlayer1.src = projectileChosen.src; 
projectileImgPlayer1.onload = function() {
    drawProjectileRect(projectileChosen);
};
//tegner prosjektil rektangelet
function drawProjectileRect(projectile) {
    ctx.fillStyle = projectile.color;
    ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height); 
    
// tegner bilde oppå rektangelet
    if (projectileDirectionRight) {
        ctx.drawImage(projectileImgPlayer1, projectile.x - projectile.imageOffsetX, projectile.y - projectile.imageOffsetY, projectile.imageWidth, projectile.imageHeight);
    } else {
        // speiler bilde hvis den beveger seg venstre
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(projectileImgPlayer1, -(projectile.x + projectile.imageWidth) + projectile.imageOffsetX, projectile.y - projectile.imageOffsetY, projectile.imageWidth, projectile.imageHeight);
        ctx.restore();
    }
}

let animationProjLeft; //brukes for å cancelere animtionframe
let animationProjRight; //brukes for å cancelere animtionframe
let projectileReady = true //sjekker om prosjektil er klar til å avfyres
let projectileActive = false //sjekker om prosjektil er aktiv
let projectileDirectionRight = true //sjekker hvilken retning prosjektilen skal bevege seg
let gravityStarted = false //passer på når gravitasjon skal starte
let gravityCooldown = false //gjør at gravitasjon ikke starter med en gang
let hasDamageBeenTaken = false //gjør at man bare kan ta skade en gang fra en prosjektil



const player1Health = document.getElementById("player1Health")
const player2Health = document.getElementById("player2Health")
const projectileDisplay = document.getElementById("player1Projectile")
const projectileDisplayPlayer2 = document.getElementById("player2Projectile")

// DamageDisplaying
function healthDisplayUpdate() {
    // Displayer health som prosent av maksliv 
    player2Health.innerHTML = Math.round((player2CharacterChosen.health / player2CharacterChosen.healthreset) * 100) + "%"
    player1Health.innerHTML = Math.round((characterChosen.health / characterChosen.healthreset) * 100) + "%"
}

//sjekker om noen har vunnet
let playerWon = 0
let gameOver = false
function checkForWin(){
    if(characterChosen.lives == 0){
        console.log("player2 wins")
        playerWon = 2
        gameOver = true
    }
    if(player2CharacterChosen.lives == 0){
        console.log("player1 wins")
        playerWon = 1
        gameOver = true
    }
    if(gameOver){
        sessionStorage.setItem('whichPlayerWon', playerWon)
        window.location.href = '../WinScreen/winScreen.html'
    }
    
}
//sjekker om noen mister liv
function checkForDead() {
    if (characterChosen.health < 0) {
        characterChosen.health = characterChosen.healthreset
        characterChosen.x = 50
        characterChosen.y = canvas.height / 2
        characterChosen.lives -= 1
        console.log("lives", characterChosen.lives)
        isLookingRight = true
        player2IsLookingRight = false
        healthDisplayUpdate()
        if (characterChosen.lives == 2) {
            player1Life1.style.backgroundColor = "black"
        }
        else if (characterChosen.lives == 1) {
            player1Life2.style.backgroundColor = "black"
        }
        else {
            player1Life3.style.backgroundColor = "black"
        }
    }
    if (player2CharacterChosen.health < 0) {
        player2CharacterChosen.health = player2CharacterChosen.healthreset
        player2CharacterChosen.x = canvas.width - (50 + player2CharacterChosen.width)
        player2CharacterChosen.y = canvas.height / 2
        player2CharacterChosen.lives -= 1
        console.log("lives", player2CharacterChosen.lives)
        healthDisplayUpdate()
        if (player2CharacterChosen.lives == 2) {
            player2Life1.style.backgroundColor = "black"
        }
        else if (player2CharacterChosen.lives == 1) {
            player2Life2.style.backgroundColor = "black"
        }
        else {
            player2Life3.style.backgroundColor = "black"
        }
    }
    checkForWin()
}

// sjekker om ultimate angrep er klart og viser spilleren om den er klar ved fargen på en div
const ultimateDisplay = document.getElementById("player1Ultimate")
const ultimateDisplayPlayer2 = document.getElementById("player2Ultimate")

function checkForUltimate(){
    if(characterChosen.ultCharge >= 100){
        ultimateDisplay.style.backgroundColor="green"
    }
    else{
        ultimateDisplay.style.backgroundColor="red"
    }
    if(player2CharacterChosen.ultCharge >= 100){
        ultimateDisplayPlayer2.style.backgroundColor="green"
    }
    else{
        ultimateDisplayPlayer2.style.backgroundColor="red"
    }
}


function gravityProj() {
    gravityStarted = true
    gravityCooldown = true
}
function damageReset() {
    hasDamageBeenTaken = false
}
//funksjon for prosjektilen sin bevegelse horisontalt og vertikalt
function projectileSpeed() {
    if (projectileDirectionRight) {
        if (!gravityStarted) {
            projectileChosen.x += projectileChosen.projSpeed
            projectileChosen.y_velocity = projectileChosen.y_startvelocity
            projectileChosen.y -= projectileChosen.y_velocity
        }
        else {
            projectileChosen.x += projectileChosen.projSpeed
            projectileChosen.y_velocity = projectileChosen.gravity
            projectileChosen.y += projectileChosen.y_velocity
        }
        if (!gravityCooldown) {
            setTimeout(gravityProj, 1000)
        }
        drawProjectileRect(projectileChosen)
        animationProjLeft = requestAnimationFrame(projectileSpeed)
    }
    else {
        if (!gravityStarted) {
            projectileChosen.x -= projectileChosen.projSpeed
            projectileChosen.y_velocity = projectileChosen.y_startvelocity
            projectileChosen.y -= projectileChosen.y_velocity
        }
        else {
            projectileChosen.x -= projectileChosen.projSpeed
            projectileChosen.y_velocity = projectileChosen.gravity
            projectileChosen.y += projectileChosen.y_velocity
        }
        if (!gravityCooldown) {
            setTimeout(gravityProj, 1000)
        }
        drawProjectileRect(projectileChosen)
        animationProjRight = requestAnimationFrame(projectileSpeed)

    }
    //sjekker om prosjektilen overlaper med motstanderen
    if (checkOverlap(projectileChosen, player2CharacterChosen)) {
        if (!hasDamageBeenTaken) {
            hasDamageBeenTaken = true
            player2CharacterChosen.health = player2CharacterChosen.health - projectileChosen.damage
            setTimeout(damageReset, 1000)
            console.log(player2CharacterChosen.health)
            console.log(characterChosen.healthreset)
            console.log(characterChosen.health / characterChosen.healthreset)
            healthDisplayUpdate()
            checkForDead()
            characterChosen.ultCharge += projectileChosen.ultPoints
            checkForUltimate()
        }
    } 
}
function cancelProjectile() {
    cancelAnimationFrame(animationProjLeft)
    cancelAnimationFrame(animationProjRight)
    gravityStarted = false
    gravityCooldown = false
}
function projectileCooldown() {
    projectileReady = true
    projectileActive = false
    projectileDisplay.style.backgroundColor = "green"
}

document.addEventListener("keydown", function (event) {
    if (event.key === 'r' || event.key === 'R') {
        console.log("gravity", gravityStarted)
        if (projectileReady) {
            if (isLookingRight) {
                projectileDirectionRight = true
            }
            else {
                projectileDirectionRight = false
            }
            projectileActive = true
            projectileChosen.x = characterChosen.x
            projectileChosen.y = characterChosen.y + characterChosen.height / 4
            console.log("r pressed")
            projectileSpeed()
            setTimeout(cancelProjectile, 2001)
            projectileReady = false
            projectileDisplay.style.backgroundColor = "red"
            setTimeout(projectileCooldown, 2000)
        }



    }
});
//player 2 (samme prosjektil kode for spiller 2)
let projectileImgPlayer2 = new Image();
projectileImgPlayer2.src = player2ProjectileChosen.src; 
projectileImgPlayer2.onload = function() {

    player2DrawProjectileRect(player2ProjectileChosen);
};

function player2DrawProjectileRect(projectilePlayer2) {
    ctx.fillStyle = projectilePlayer2.color;
    ctx.fillRect(projectilePlayer2.x, projectilePlayer2.y, projectilePlayer2.width, projectilePlayer2.height); 
    
    if (player2ProjectileDirectionRight) {
        ctx.drawImage(projectileImgPlayer2, projectilePlayer2.x - projectilePlayer2.imageOffsetX, projectilePlayer2.y - projectilePlayer2.imageOffsetY, projectilePlayer2.imageWidth, projectilePlayer2.imageHeight);
    } else {

        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(projectileImgPlayer2, -(projectilePlayer2.x + projectilePlayer2.imageWidth) + projectilePlayer2.imageOffsetX, projectilePlayer2.y - projectilePlayer2.imageOffsetY, projectilePlayer2.imageWidth, projectilePlayer2.imageHeight);
        ctx.restore();
    }
}




let player2AnimationProjLeft;
let player2AnimationProjRight;
let player2ProjectileReady = true
let player2ProjectileActive = false
let player2ProjectileDirectionRight = true
let player2GravityStarted = false
let player2GravityCooldown = false
let player2HasDamageBeenTaken = false






function player2GravityProj() {
    player2GravityStarted = true
    player2GravityCooldown = true
}
function player2DamageReset() {
    player2HasDamageBeenTaken = false
}
function player2ProjectileSpeed() {
    if (player2ProjectileDirectionRight) {
        if (!player2GravityStarted) {
            player2ProjectileChosen.x += player2ProjectileChosen.projSpeed
            player2ProjectileChosen.y_velocity = player2ProjectileChosen.y_startvelocity
            player2ProjectileChosen.y -= player2ProjectileChosen.y_velocity
        }
        else {
            player2ProjectileChosen.x += player2ProjectileChosen.projSpeed
            player2ProjectileChosen.y_velocity = player2ProjectileChosen.gravity
            player2ProjectileChosen.y += player2ProjectileChosen.y_velocity
        }
        if (!player2GravityCooldown) {
            setTimeout(player2GravityProj, 1000)
        }
        player2DrawProjectileRect(player2ProjectileChosen)
        player2AnimationProjLeft = requestAnimationFrame(player2ProjectileSpeed)
    }
    else {
        if (!player2GravityStarted) {
            player2ProjectileChosen.x -= player2ProjectileChosen.projSpeed
            player2ProjectileChosen.y_velocity = player2ProjectileChosen.y_startvelocity
            player2ProjectileChosen.y -= player2ProjectileChosen.y_velocity
        }
        else {
            player2ProjectileChosen.x -= player2ProjectileChosen.projSpeed
            player2ProjectileChosen.y_velocity = player2ProjectileChosen.gravity
            player2ProjectileChosen.y += player2ProjectileChosen.y_velocity
        }
        if (!player2GravityCooldown) {
            setTimeout(player2GravityProj, 1000)
        }
        player2DrawProjectileRect(player2ProjectileChosen)
        player2AnimationProjRight = requestAnimationFrame(player2ProjectileSpeed)

    }
    if (checkOverlap(player2ProjectileChosen, characterChosen)) {
        if (!player2HasDamageBeenTaken) {
            player2HasDamageBeenTaken = true
            characterChosen.health = characterChosen.health - player2ProjectileChosen.damage
            setTimeout(player2DamageReset, 1000)
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
            player2CharacterChosen.ultCharge += player2ProjectileChosen.ultPoints
            checkForUltimate()
        }
    } 
}
function player2CancelProjectile() {
    cancelAnimationFrame(player2AnimationProjLeft)
    cancelAnimationFrame(player2AnimationProjRight)
    player2GravityStarted = false
    player2GravityCooldown = false
}
function player2ProjectileCooldown() {
    player2ProjectileReady = true
    player2ProjectileActive = false
    projectileDisplayPlayer2.style.backgroundColor = "green"
}

document.addEventListener("keydown", function (event) {
    if (event.key === '-' || event.key === '_') {
        console.log("gravity", player2GravityStarted)
        if (player2ProjectileReady) {
            if (player2IsLookingRight) {
                player2ProjectileDirectionRight = true
            }
            else {
                player2ProjectileDirectionRight = false
            }
            player2ProjectileActive = true
            player2ProjectileChosen.x = player2CharacterChosen.x
            player2ProjectileChosen.y = player2CharacterChosen.y + player2CharacterChosen.height / 4
            player2ProjectileSpeed()
            setTimeout(player2CancelProjectile, 2001)
            player2ProjectileReady = false
            projectileDisplayPlayer2.style.backgroundColor = "red"
            setTimeout(player2ProjectileCooldown, 2000)
        }



    }
});

// Melee attack
// Player 1

let meleeImgPlayer1 = new Image();
meleeImgPlayer1.src = meleeChosen.src; 
meleeImgPlayer1.onload = function() {
    drawMeleeRect(meleeChosen);
};
//tegner rektangelet og bilde på rektangelet sin posisjon
function drawMeleeRect(melee) {
    ctx.fillStyle = melee.color;
    ctx.fillRect(melee.x, melee.y, melee.width, melee.height); 
    
    
    if (isLookingRight) {
        ctx.drawImage(meleeImgPlayer1, melee.x - melee.imageOffsetX, melee.y - melee.imageOffsetY, melee.imageWidth, melee.imageHeight);
    } else {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(meleeImgPlayer1, -(melee.x + melee.imageWidth) + melee.imageOffsetX, melee.y - melee.imageOffsetY, melee.imageWidth, melee.imageHeight);
        ctx.restore();
    }
}


let meleeReady = true //sjekker om melee angrep er klart for bruk
let animationMeleeRight; //brukes for å cancelere animationframe
let hasMeleeDamageBeenTaken = false //passer på at man bare kan bli skada en gang av samme angrep

//viser om melee angrep er klart gjennom fargen på en div
const meleeDisplay = document.getElementById("player1Melee")
const meleeDisplayPlayer2 = document.getElementById("player2Melee")

// funksjon for melee angrep
function meleeAttack() {
    if (isLookingRight) {
        meleeChosen.x = characterChosen.x + characterChosen.width
        meleeChosen.y = characterChosen.y + characterChosen.height / 4
    }
    else {
        meleeChosen.x = characterChosen.x - meleeChosen.width
        meleeChosen.y = characterChosen.y + characterChosen.height / 4
    }
    drawMeleeRect(meleeChosen)
    animationMeleeRight = requestAnimationFrame(meleeAttack)
    if (checkOverlap(meleeChosen, player2CharacterChosen)) { //sjekker om melee treffer motstander
        if (!hasMeleeDamageBeenTaken) {
            hasMeleeDamageBeenTaken = true
            player2CharacterChosen.health = player2CharacterChosen.health - meleeChosen.damage
            setTimeout(meleeDamageReset, 1000)
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
            characterChosen.ultCharge += meleeChosen.ultPoints
            checkForUltimate()
        }
    } else {
    }
}
function meleeCooldown() {
    meleeReady = true
    meleeDisplay.style.backgroundColor = "green"
}
function meleeDuration() {
    cancelAnimationFrame(animationMeleeRight)
}
function meleeDamageReset() {
    hasMeleeDamageBeenTaken = false
}
document.addEventListener("keydown", function (event) {
    if (event.key === 'e' || event.key === 'E') {
        if (meleeReady) {
            meleeAttack()
            console.log("e pressed")
            meleeReady = false
            meleeDisplay.style.backgroundColor = "red"
            setTimeout(meleeDuration, 1000)
            setTimeout(meleeCooldown, 2000)


        }


    }
});
// Player 2 (samme kode for player 2)
let meleeImgPlayer2 = new Image();
meleeImgPlayer2.src = player2MeleeChosen.src; 
meleeImgPlayer2.onload = function() {
    player2DrawMeleeRect(player2MeleeChosen);
};

function player2DrawMeleeRect(meleePlayer2) {
    ctx.fillStyle = meleePlayer2.color;
    ctx.fillRect(meleePlayer2.x, meleePlayer2.y, meleePlayer2.width, meleePlayer2.height); 
    
    if (player2IsLookingRight) {
        ctx.drawImage(meleeImgPlayer2, meleePlayer2.x - meleePlayer2.imageOffsetX, meleePlayer2.y - meleePlayer2.imageOffsetY, meleePlayer2.imageWidth, meleePlayer2.imageHeight);
    } else {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(meleeImgPlayer2, -(meleePlayer2.x + meleePlayer2.imageWidth) + meleePlayer2.imageOffsetX, meleePlayer2.y - meleePlayer2.imageOffsetY, meleePlayer2.imageWidth, meleePlayer2.imageHeight);
        ctx.restore();
    }
}




let player2MeleeReady = true
let player2AnimationMeleeRight;
let player2HasMeleeDamageBeenTaken = false

function player2MeleeAttack() {
    if (player2IsLookingRight) {
        player2MeleeChosen.x = player2CharacterChosen.x + player2CharacterChosen.width
        player2MeleeChosen.y = player2CharacterChosen.y + player2CharacterChosen.height / 4
    }
    else {
        player2MeleeChosen.x = player2CharacterChosen.x - player2MeleeChosen.width
        player2MeleeChosen.y = player2CharacterChosen.y + player2CharacterChosen.height / 4
    }
    player2DrawMeleeRect(player2MeleeChosen)
    player2AnimationMeleeRight = requestAnimationFrame(player2MeleeAttack)
    if (checkOverlap(player2MeleeChosen, characterChosen)) {
        if (!player2HasMeleeDamageBeenTaken) {
            player2HasMeleeDamageBeenTaken = true
            characterChosen.health = characterChosen.health - player2MeleeChosen.damage
            setTimeout(player2MeleeDamageReset, 1000)
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
            player2CharacterChosen.ultCharge += player2MeleeChosen.ultPoints
            checkForUltimate()
        }
    } 
}
function player2MeleeCooldown() {
    player2MeleeReady = true
    meleeDisplayPlayer2.style.backgroundColor = "green"
}
function player2MeleeDuration() {
    cancelAnimationFrame(player2AnimationMeleeRight)
}
function player2MeleeDamageReset() {
    player2HasMeleeDamageBeenTaken = false
}
document.addEventListener("keydown", function (event) {
    if (event.key === '@' || event.key === '*') {
        if (player2MeleeReady) {
            player2MeleeAttack()
            console.log("e pressed")
            player2MeleeReady = false
            meleeDisplayPlayer2.style.backgroundColor = "red"
            setTimeout(player2MeleeDuration, 1000)
            setTimeout(player2MeleeCooldown, 2000)


        }


    }
});

//Special attacks
// Player 1
// Melee special
let meleeUltimateImgPlayer1 = new Image();
meleeUltimateImgPlayer1.src = ultimateChosen.src;
meleeUltimateImgPlayer1.onload = function() {
    drawUltimateMeleeRect(ultimateChosen);
};

//tegner melee angrep og bilde
function drawUltimateMeleeRect(meleeUltimate) {
    ctx.fillStyle = meleeUltimate.color;
    ctx.fillRect(meleeUltimate.x, meleeUltimate.y, meleeUltimate.width, meleeUltimate.height); 

    if (isLookingRight) {
        ctx.drawImage(meleeUltimateImgPlayer1, meleeUltimate.x - meleeUltimate.imageOffsetX, meleeUltimate.y - meleeUltimate.imageOffsetY, meleeUltimate.imageWidth, meleeUltimate.imageHeight);
    } else {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(meleeUltimateImgPlayer1, -(meleeUltimate.x + meleeUltimate.imageWidth) + meleeUltimate.imageOffsetX, meleeUltimate.y - meleeUltimate.imageOffsetY, meleeUltimate.imageWidth, meleeUltimate.imageHeight);
        ctx.restore();
    }
}



let ultimateAnimationRight; //brukes for a kansellere animation frame
let ultimateHasDamageBeenTaken = false //passer på at man bare tar skade en gang




function ultimateMeleeAttack() {
    if (isLookingRight) {
        ultimateChosen.x = characterChosen.x + characterChosen.width
        ultimateChosen.y = characterChosen.y + characterChosen.height / 4
    }
    else {
        ultimateChosen.x = characterChosen.x - ultimateChosen.width
        ultimateChosen.y = characterChosen.y + characterChosen.height / 4
    }
    drawUltimateMeleeRect(ultimateChosen)
    ultimateAnimationRight = requestAnimationFrame(ultimateMeleeAttack)
    if (checkOverlap(ultimateChosen, player2CharacterChosen)) {
        if (!ultimateHasDamageBeenTaken) {
            ultimateHasDamageBeenTaken = true
            player2CharacterChosen.health = player2CharacterChosen.health - ultimateChosen.damage
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
        }
    } else {
    }

}
function ultimateMeleeDuration() {
    cancelAnimationFrame(ultimateAnimationRight)
}
function ultimateDamageCooldown() {
    ultimateHasDamageBeenTaken = false
}
// Projectile ultimate
let projectileUltimateImgPlayer1 = new Image();
projectileUltimateImgPlayer1.src = ultimateChosen.src; 
projectileUltimateImgPlayer1.onload = function() {
    drawUltimateProjRect(ultimateChosen);
};

function drawUltimateProjRect(projUltimate) {
    ctx.fillStyle = projUltimate.color;
    ctx.fillRect(projUltimate.x, projUltimate.y, projUltimate.width, projUltimate.height); 
    
    if (isLookingRight) {
        ctx.drawImage(projectileUltimateImgPlayer1, projUltimate.x - projUltimate.imageOffsetX, projUltimate.y - projUltimate.imageOffsetY, projUltimate.imageWidth, projUltimate.imageHeight);
    } else {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(projectileUltimateImgPlayer1, -(projUltimate.x + projUltimate.imageWidth) + projUltimate.imageOffsetX, projUltimate.y - projUltimate.imageOffsetY, projUltimate.imageWidth, projUltimate.imageHeight);
        ctx.restore();
    }
}

function ultimateProjectileAttack() {
    if (isLookingRight) {
        ultimateChosen.x += ultimateChosen.projSpeed
    }
    else{
        ultimateChosen.x -= ultimateChosen.projSpeed
    }
    drawUltimateProjRect(ultimateChosen)
    ultimateAnimationRight = requestAnimationFrame(ultimateProjectileAttack)
    if (checkOverlap(ultimateChosen, player2CharacterChosen)) {
        if (!ultimateHasDamageBeenTaken) {
            ultimateHasDamageBeenTaken = true
            player2CharacterChosen.health = player2CharacterChosen.health - ultimateChosen.damage
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
        }
    } 
}

document.addEventListener("keydown", function (event) {
    if (event.key === 'f' || event.key === 'F') {
        if (characterChosen.ultCharge >= 100) {
            characterChosen.ultCharge = 0
            if (characterChosen != archer) {
                ultimateMeleeAttack()
                console.log("f pressed")
                setTimeout(ultimateMeleeDuration, 2000)
                setTimeout(ultimateDamageCooldown, 3000)
            }
            else{
                flamingArrow.x = archer.x
                flamingArrow.y = archer.y
                ultimateProjectileAttack()
                setTimeout(ultimateMeleeDuration, 2000)
                setTimeout(ultimateDamageCooldown, 3000)
            }
            checkForUltimate()



        }


    }
});
// Player 2 (samme kode for spiller 2)
// Melee special
let meleeUltimateImgPlayer2 = new Image();
meleeUltimateImgPlayer2.src = player2UltimateChosen.src; 
meleeUltimateImgPlayer2.onload = function() {
    player2DrawUltimateMeleeRect(player2UltimateChosen);
};

function player2DrawUltimateMeleeRect(meleeUltimatePlayer2) {
    ctx.fillStyle = meleeUltimatePlayer2.color;
    ctx.fillRect(meleeUltimatePlayer2.x, meleeUltimatePlayer2.y, meleeUltimatePlayer2.width, meleeUltimatePlayer2.height); 
    
    if (player2IsLookingRight) {
        ctx.drawImage(meleeUltimateImgPlayer2, meleeUltimatePlayer2.x - meleeUltimatePlayer2.imageOffsetX, meleeUltimatePlayer2.y - meleeUltimatePlayer2.imageOffsetY, meleeUltimatePlayer2.imageWidth, meleeUltimatePlayer2.imageHeight);
    } else {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(meleeUltimateImgPlayer2, -(meleeUltimatePlayer2.x + meleeUltimatePlayer2.imageWidth) + meleeUltimatePlayer2.imageOffsetX, meleeUltimatePlayer2.y - meleeUltimatePlayer2.imageOffsetY, meleeUltimatePlayer2.imageWidth, meleeUltimatePlayer2.imageHeight);
        ctx.restore();
    }
}



let player2UltimateReady = true
let player2UltimateAnimationRight;
let player2UltimateHasDamageBeenTaken = false


function player2UltimateMeleeAttack() {
    if (player2IsLookingRight) {
        player2UltimateChosen.x = player2CharacterChosen.x + player2CharacterChosen.width
        player2UltimateChosen.y = player2CharacterChosen.y + player2CharacterChosen.height / 4
    }
    else {
        player2UltimateChosen.x = player2CharacterChosen.x - player2UltimateChosen.width
        player2UltimateChosen.y = player2CharacterChosen.y + player2CharacterChosen.height / 4
    }
    player2DrawUltimateMeleeRect(player2UltimateChosen)
    player2UltimateAnimationRight = requestAnimationFrame(player2UltimateMeleeAttack)
    if (checkOverlap(player2UltimateChosen, characterChosen)) {
        if (!player2UltimateHasDamageBeenTaken) {
            player2UltimateHasDamageBeenTaken = true
            characterChosen.health = characterChosen.health - player2UltimateChosen.damage
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
        }
    } 

}
function player2UltimateMeleeDuration() {
    cancelAnimationFrame(player2UltimateAnimationRight)
}
function player2UltimateDamageCooldown() {
    player2UltimateHasDamageBeenTaken = false
}
// Projectile ultimate
let projectileUltimateImgPlayer2 = new Image();
projectileUltimateImgPlayer2.src = player2UltimateChosen.src; 
projectileUltimateImgPlayer2.onload = function() {
    player2DrawUltimateProjRect(player2UltimateChosen);
};

function player2DrawUltimateProjRect(projUltimatePlayer2) {
    ctx.fillStyle = projUltimatePlayer2.color;
    ctx.fillRect(projUltimatePlayer2.x, projUltimatePlayer2.y, projUltimatePlayer2.width, projUltimatePlayer2.height); 
    
    if (player2IsLookingRight) {
        ctx.drawImage(projectileUltimateImgPlayer2, projUltimatePlayer2.x - projUltimatePlayer2.imageOffsetX, projUltimatePlayer2.y - projUltimatePlayer2.imageOffsetY, projUltimatePlayer2.imageWidth, projUltimatePlayer2.imageHeight);
    } else {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(projectileUltimateImgPlayer2, -(projUltimatePlayer2.x + projUltimatePlayer2.imageWidth) + projUltimatePlayer2.imageOffsetX, projUltimatePlayer2.y - projUltimatePlayer2.imageOffsetY, projUltimatePlayer2.imageWidth, projUltimatePlayer2.imageHeight);
        ctx.restore();
    }
}


function player2UltimateProjectileAttack() {
    if (player2IsLookingRight) {
        player2UltimateChosen.x += player2UltimateChosen.projSpeed
    }
    else{
        player2UltimateChosen.x -= player2UltimateChosen.projSpeed
    }
    player2DrawUltimateProjRect(player2UltimateChosen)
    player2UltimateAnimationRight = requestAnimationFrame(player2UltimateProjectileAttack)
    if (checkOverlap(player2UltimateChosen, characterChosen)) {
        if (!player2UltimateHasDamageBeenTaken) {
            player2UltimateHasDamageBeenTaken = true
            characterChosen.health = characterChosen.health - player2UltimateChosen.damage
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
        }
    } 
}

document.addEventListener("keydown", function (event) {
    if (event.key === '.' || event.key === ':') {
        if (player2CharacterChosen.ultCharge >= 100) {
            player2CharacterChosen.ultCharge = 0
            if (player2CharacterChosen != archerPlayer2) {
                player2UltimateMeleeAttack()
                console.log("f pressed")
                setTimeout(player2UltimateMeleeDuration, 2000)
                setTimeout(player2UltimateDamageCooldown, 3000)
            }
            else{
                flamingArrowPlayer2.x = archerPlayer2.x
                flamingArrowPlayer2.y = archerPlayer2.y
                player2UltimateProjectileAttack()
                setTimeout(player2UltimateMeleeDuration, 2000)
                setTimeout(player2UltimateDamageCooldown, 3000)
            }
            checkForUltimate()



        }


    }
});


//Overlap detection
function checkOverlap(attack, character) {
    if (
        attack.x < character.x + character.width &&
        attack.x + attack.width > character.x &&
        attack.y < character.y + character.height &&
        attack.y + attack.height > character.y
    ) {
        return true; // Overlap detected
    } else {
        return false; // No overlap
    }
}




movement()



//timer
let sekund = 0
let minutt = 0

function clock() {
    sekund += 1
    if (sekund >= 60) {
        sekund = 0
        minutt += 1
    }
    if (sekund < 10) {
        document.getElementById("second").innerHTML = "0" + sekund
    }
    else {
        document.getElementById("second").innerHTML = sekund
    }
    if (minutt < 10) {
        document.getElementById("minute").innerHTML = "0" + minutt
    }
    else {
        document.getElementById("minute").innerHTML = minutt
    }
}
setInterval(clock, 1000)
