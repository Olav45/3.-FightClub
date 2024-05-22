const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 1000
canvas.height = 500





//Characters
//Player 1
const allRound = {
    x: 50, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 50, // bredde
    height: 100, // høyde
    color: 'blue', // fyllfarge
    speed: 3, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 6,
    jumpheight: 5,
    health: 200,
    healthreset: 200,
    lives: 3,
    ultCharge: 100,
};
const gunshot = {
    x: 300,
    y: canvas.height / 2,
    width: 150, // bredde
    height: 40, // høyde
    color: "green",
    projSpeed: 5,
    x_velocity: 0,
    gravity: 1,
    y_velocity: 0,
    y_startvelocity: 1,
    damage: 10,
    ultPoints: 10,

}
const whip = {
    x: allRound.x + allRound.width,
    y: allRound.y + allRound.height / 4,
    width: 30,
    height: 30,
    color: "green",
    damage: 20,
    ultPoints: 10,
}
const junglePunch = {
    x: allRound.x + allRound.width,
    y: allRound.y + allRound.height / 4,
    width: 100,
    height: 50,
    color: "green",
    damage: 40,
}

const tank = {
    x: 50, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 80, // bredde
    height: 130, // høyde
    color: 'saddlebrown', // fyllfarge
    speed: 2, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 10,
    jumpheight: 3,
    health: 340,
    healthreset: 340,
    lives: 3,
    ultCharge: 100,
}
const rockThrow = {
    x: tank.x,
    y: tank.y,
    width: 50, // bredde
    height: 50, // høyde
    color: "green",
    projSpeed: 5,
    x_velocity: 0,
    gravity: 6,
    y_velocity: 0,
    y_startvelocity: 5,
    damage: 10,
    ultPoints: 15,
}
const punch = {
    x: tank.x + tank.width,
    y: tank.y + tank.height / 4,
    width: 60,
    height: 60,
    color: "saddlebrown",
    damage: 30,
    ultPoints: 10,
}
const smashPunch = {
    x: tank.x + tank.width,
    y: tank.y + tank.height / 4,
    width: 100,
    height: 100,
    color: "saddlebrown",
    damage: 60,
}

const archer = {
    x: 50, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 40, // bredde
    height: 80, // høyde
    color: 'green', // fyllfarge
    speed: 4, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 4,
    jumpheight: 6,
    health: 140,
    healthreset: 140,
    lives: 3,
    ultCharge: 100,
}
const arrow = {
    x: archer.x,
    y: archer.y,
    width: 40,
    height: 20,
    color: "green",
    projSpeed: 7,
    x_velocity: 0,
    gravity: 0,
    y_velocity: 0,
    y_startvelocity: 0,
    damage: 15,
    ultPoints: 15,
}
const bowPunch = {
    x: archer.x,
    y: archer.y,
    width: 20,
    height: 20,
    color: "green",
    damage: 15,
    ultPoints: 15,
}
const flamingArrow = {
    x: archer.x,
    y: archer.y,
    width: 60,
    height: 30,
    color: "green",
    projSpeed: 12,
    x_velocity: 0,
    gravity: 0,
    y_velocity: 0,
    y_startvelocity: 0,
    damage: 45,
}
//Player 2
const allRoundPlayer2 = {
    x: canvas.width - 100, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 50, // bredde
    height: 100, // høyde
    color: 'red', // fyllfarge
    speed: 3, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 6,
    jumpheight: 5,
    health: 200,
    healthreset: 200,
    lives: 3,
    ultCharge: 100,
};
const gunshotPlayer2 = {
    x: 300,
    y: canvas.height / 2,
    width: 150, // bredde
    height: 40, // høyde
    color: "red",
    projSpeed: 5,
    x_velocity: 0,
    gravity: 0,
    y_velocity: 0,
    y_startvelocity: 0,
    damage: 10,
    ultPoints: 10,

}
const whipPlayer2 = {
    x: allRound.x,
    y: allRound.y,
    width: 30,
    height: 30,
    color: "green",
    damage: 20,
    ultPoints: 10,
}
const junglePunchPlayer2 = {
    x: allRound.x + allRound.width,
    y: allRound.y + allRound.height / 4,
    width: 100,
    height: 50,
    color: "green",
    damage: 40,
}

const tankPlayer2 = {
    x: canvas.width - 130, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 80, // bredde
    height: 130, // høyde
    color: 'red', // fyllfarge
    speed: 2, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 10,
    jumpheight: 3,
    health: 340,
    healthreset: 340,
    lives: 3,
    ultCharge: 100,
}
const rockThrowPlayer2 = {
    x: tank.x,
    y: tank.y,
    width: 50, // bredde
    height: 50, // høyde
    color: "red",
    projSpeed: 5,
    x_velocity: 0,
    gravity: 6,
    y_velocity: 0,
    y_startvelocity: 5,
    damage: 10,
    ultPoints: 15,


}
const punchPlayer2 = {
    x: tank.x,
    y: tank.y,
    width: 60,
    height: 60,
    color: "saddlebrown",
    damage: 30,
    ultPoints: 10,
}
const smashPunchPlayer2 = {
    x: tank.x + tank.width,
    y: tank.y + tank.height / 4,
    width: 100,
    height: 100,
    color: "saddlebrown",
    damage: 60,
}
const archerPlayer2 = {
    x: canvas.width - 90, // x-posisjon
    y: canvas.height / 2, // y-posisjon
    width: 40, // bredde
    height: 80, // høyde
    color: 'red', // fyllfarge
    speed: 4, // hastighet
    x_velocity: 0,
    y_velocity: 0,
    gravity: 4,
    jumpheight: 6,
    health: 140,
    healthreset: 140,
    lives: 3,
    ultCharge: 100,
}
const arrowPlayer2 = {
    x: archer.x,
    y: archer.y,
    width: 40,
    height: 20,
    color: "red",
    projSpeed: 7,
    x_velocity: 0,
    gravity: 0,
    y_velocity: 0,
    y_startvelocity: 0,
    damage: 15,
    ultPoints: 15,
}
const bowPunchPlayer2 = {
    x: archer.x,
    y: archer.y,
    width: 20,
    height: 20,
    color: "green",
    damage: 15,
    ultPoints: 15,
}
const flamingArrowPlayer2 = {
    x: archer.x,
    y: archer.y,
    width: 60,
    height: 30,
    color: "green",
    projSpeed: 12,
    damage: 45,
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Tømmer canvasen
    requestAnimationFrame(clearCanvas)
}
clearCanvas()

function drawRectangle(character) {
    ctx.fillStyle = character.color;
    ctx.fillRect(character.x, character.y, character.width, character.height); // Tegner firkanten
}
function player2DrawRectangle(player2Character) {
    ctx.fillStyle = player2Character.color;
    ctx.fillRect(player2Character.x, player2Character.y, player2Character.width, player2Character.height); // Tegner firkanten
}


//Movement
let isLookingRight = true
let player2IsLookingRight = false

function movement() {


    //player 1
    //Right

    let animationRight;
    let isDpressed = false

    function moveRight() {
        characterChosen.x_velocity = characterChosen.speed
        characterChosen.x += characterChosen.speed
        drawRectangle(characterChosen)
        animationRight = requestAnimationFrame(moveRight)
        if (projectileActive) {
            drawProjectileRect()
        }
    }
    document.addEventListener("keydown", function (event) {
        if (event.key === 'd' || event.key === 'D') {
            if (!isDpressed) {
                moveRight()
                isDpressed = true;
                isLookingRight = true
                console.log(Math.round((characterChosen.health / characterChosen.healthreset) * 100) + "%")
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


    //Left
    let animationLeft;
    let isApressed = false

    function moveLeft() {
        characterChosen.x_velocity = characterChosen.speed
        characterChosen.x -= characterChosen.speed
        drawRectangle(characterChosen)
        animationLeft = requestAnimationFrame(moveLeft)
        if (projectileActive) {
            drawProjectileRect()
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

    let jumpArr = ["jump", "jump"]
    let isWpressed = false
    let isJumpStopped = false
    let isJumpActive = false





    let animationJump;
    let timeooutId;

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
            drawProjectileRect()
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
        else if (characterChosen.y >= canvas.height - characterChosen.height) {
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

    //player 2
    //Right
    let player2AnimationRight;
    let player2IsDpressed = false

    function player2MoveRight() {
        player2CharacterChosen.x_velocity = player2CharacterChosen.speed
        player2CharacterChosen.x += player2CharacterChosen.speed
        player2DrawRectangle(player2CharacterChosen)
        player2AnimationRight = requestAnimationFrame(player2MoveRight)
        if (projectileActive) {
            drawProjectileRect()
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
        if (projectileActive) {
            drawProjectileRect()
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
        if (projectileActive) {
            drawProjectileRect()
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
let animationProjLeft;
let animationProjRight;
let projectileReady = true
let projectileActive = false
let projectileDirectionRight = true
let gravityStarted = false
let gravityCooldown = false
let hasDamageBeenTaken = false



const player1Health = document.getElementById("player1Health")
const player2Health = document.getElementById("player2Health")

// DamageDisplaying
function healthDisplayUpdate() {
    player2Health.innerHTML = Math.round((player2CharacterChosen.health / player2CharacterChosen.healthreset) * 100) + "%"
    player1Health.innerHTML = Math.round((characterChosen.health / characterChosen.healthreset) * 100) + "%"
    console.log("health")
}
function checkForDead() {
    if (characterChosen.health < 0) {
        characterChosen.health = characterChosen.healthreset
        characterChosen.x = 50
        characterChosen.y = canvas.height / 2
        characterChosen.lives -= 1
        console.log("lives", characterChosen.lives)
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
}


function drawProjectileRect() {
    ctx.fillStyle = projectileChosen.color;
    ctx.fillRect(projectileChosen.x, projectileChosen.y, projectileChosen.width, projectileChosen.height);
}
function gravityProj() {
    gravityStarted = true
    gravityCooldown = true
}
function damageReset() {
    hasDamageBeenTaken = false
}
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
        drawProjectileRect()
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
        drawProjectileRect()
        animationProjRight = requestAnimationFrame(projectileSpeed)

    }
    if (checkOverlap(projectileChosen, player2CharacterChosen)) {
        console.log("Overlap detected!");
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
        }
    } else {
        console.log("No overlap detected.");
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
            setTimeout(projectileCooldown, 2000)
        }



    }
});
//player 2
let player2AnimationProjLeft;
let player2AnimationProjRight;
let player2ProjectileReady = true
let player2ProjectileActive = false
let player2ProjectileDirectionRight = true
let player2GravityStarted = false
let player2GravityCooldown = false
let player2HasDamageBeenTaken = false





function player2DrawProjectileRect() {
    ctx.fillStyle = player2ProjectileChosen.color;
    ctx.fillRect(player2ProjectileChosen.x, player2ProjectileChosen.y, player2ProjectileChosen.width, player2ProjectileChosen.height);
}
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
        player2DrawProjectileRect()
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
        player2DrawProjectileRect()
        player2AnimationProjRight = requestAnimationFrame(player2ProjectileSpeed)

    }
    if (checkOverlap(player2ProjectileChosen, characterChosen)) {
        console.log("Overlap detected!");
        if (!player2HasDamageBeenTaken) {
            player2HasDamageBeenTaken = true
            characterChosen.health = characterChosen.health - player2ProjectileChosen.damage
            setTimeout(player2DamageReset, 1000)
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
            player2CharacterChosen.ultCharge += player2ProjectileChosen.ultPoints
        }
    } else {
        console.log("No overlap detected.");
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
            setTimeout(player2ProjectileCooldown, 2000)
        }



    }
});

// Melee attack
// Player 1
let meleeReady = true
let animationMeleeRight;
let hasMeleeDamageBeenTaken = false

function drawMeleeRect() {
    ctx.fillStyle = meleeChosen.color;
    ctx.fillRect(meleeChosen.x, meleeChosen.y, meleeChosen.width, meleeChosen.height);
}
function meleeAttack() {
    if (isLookingRight) {
        meleeChosen.x = characterChosen.x + characterChosen.width
        meleeChosen.y = characterChosen.y + characterChosen.height / 4
    }
    else {
        meleeChosen.x = characterChosen.x - meleeChosen.width
        meleeChosen.y = characterChosen.y + characterChosen.height / 4
    }
    drawMeleeRect()
    animationMeleeRight = requestAnimationFrame(meleeAttack)
    if (checkOverlap(meleeChosen, player2CharacterChosen)) {
        console.log("Overlap detected!");
        if (!hasMeleeDamageBeenTaken) {
            hasMeleeDamageBeenTaken = true
            player2CharacterChosen.health = player2CharacterChosen.health - meleeChosen.damage
            setTimeout(meleeDamageReset, 1000)
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
            characterChosen.ultCharge += meleeChosen.ultPoints
        }
    } else {
        console.log("No overlap detected.");
    }
}
function meleeCooldown() {
    meleeReady = true
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
            setTimeout(meleeDuration, 1000)
            setTimeout(meleeCooldown, 2000)


        }


    }
});
// Player 2
let player2MeleeReady = true
let player2AnimationMeleeRight;
let player2HasMeleeDamageBeenTaken = false

function player2DrawMeleeRect() {
    ctx.fillStyle = player2MeleeChosen.color;
    ctx.fillRect(player2MeleeChosen.x, player2MeleeChosen.y, player2MeleeChosen.width, player2MeleeChosen.height);
}
function player2MeleeAttack() {
    if (player2IsLookingRight) {
        player2MeleeChosen.x = player2CharacterChosen.x + player2CharacterChosen.width
        player2MeleeChosen.y = player2CharacterChosen.y + player2CharacterChosen.height / 4
    }
    else {
        player2MeleeChosen.x = player2CharacterChosen.x - player2MeleeChosen.width
        player2MeleeChosen.y = player2CharacterChosen.y + player2CharacterChosen.height / 4
    }
    player2DrawMeleeRect()
    player2AnimationMeleeRight = requestAnimationFrame(player2MeleeAttack)
    if (checkOverlap(player2MeleeChosen, characterChosen)) {
        console.log("Overlap detected!");
        if (!player2HasMeleeDamageBeenTaken) {
            player2HasMeleeDamageBeenTaken = true
            characterChosen.health = characterChosen.health - player2MeleeChosen.damage
            setTimeout(player2MeleeDamageReset, 1000)
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
            player2CharacterChosen.ultCharge += player2MeleeChosen.ultPoints
        }
    } else {
        console.log("No overlap detected.");
    }
}
function player2MeleeCooldown() {
    player2MeleeReady = true
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
            setTimeout(player2MeleeDuration, 1000)
            setTimeout(player2MeleeCooldown, 2000)


        }


    }
});

//Special attacks
// Player 1
// Melee special
let ultimateReady = true
let ultimateAnimationRight;
let ultimateHasDamageBeenTaken = false

function drawUltimateMeleeRect() {
    ctx.fillStyle = ultimateChosen.color;
    ctx.fillRect(ultimateChosen.x, ultimateChosen.y, ultimateChosen.width, ultimateChosen.height);
}
function ultimateMeleeAttack() {
    if (isLookingRight) {
        ultimateChosen.x = characterChosen.x + characterChosen.width
        ultimateChosen.y = characterChosen.y + characterChosen.height / 4
    }
    else {
        ultimateChosen.x = characterChosen.x - ultimateChosen.width
        ultimateChosen.y = characterChosen.y + characterChosen.height / 4
    }
    drawUltimateMeleeRect()
    ultimateAnimationRight = requestAnimationFrame(ultimateMeleeAttack)
    if (checkOverlap(ultimateChosen, player2CharacterChosen)) {
        if (!ultimateHasDamageBeenTaken) {
            ultimateHasDamageBeenTaken = true
            console.log("Overlap detected!");
            player2CharacterChosen.health = player2CharacterChosen.health - ultimateChosen.damage
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
        }
    } else {
        console.log("No overlap detected.");
    }

}
function ultimateMeleeDuration() {
    cancelAnimationFrame(ultimateAnimationRight)
}
function ultimateDamageCooldown() {
    ultimateHasDamageBeenTaken = false
}
// Projectile ultimate
function drawUltimateProjRect() {
    ctx.fillStyle = ultimateChosen.color;
    ctx.fillRect(ultimateChosen.x, ultimateChosen.y, ultimateChosen.width, ultimateChosen.height);
}

function ultimateProjectileAttack() {
    if (isLookingRight) {
        ultimateChosen.x += ultimateChosen.projSpeed
    }
    else{
        ultimateChosen.x -= ultimateChosen.projSpeed
    }
    drawUltimateProjRect()
    ultimateAnimationRight = requestAnimationFrame(ultimateProjectileAttack)
    if (checkOverlap(ultimateChosen, player2CharacterChosen)) {
        if (!ultimateHasDamageBeenTaken) {
            ultimateHasDamageBeenTaken = true
            console.log("Overlap detected!");
            player2CharacterChosen.health = player2CharacterChosen.health - ultimateChosen.damage
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
        }
    } else {
        console.log("No overlap detected.");
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



        }


    }
});
// Player 2
// Melee special
let player2UltimateReady = true
let player2UltimateAnimationRight;
let player2UltimateHasDamageBeenTaken = false

function player2DrawUltimateMeleeRect() {
    ctx.fillStyle = player2UltimateChosen.color;
    ctx.fillRect(player2UltimateChosen.x, player2UltimateChosen.y, player2UltimateChosen.width, player2UltimateChosen.height);
}
function player2UltimateMeleeAttack() {
    if (player2IsLookingRight) {
        player2UltimateChosen.x = player2CharacterChosen.x + player2CharacterChosen.width
        player2UltimateChosen.y = player2CharacterChosen.y + player2CharacterChosen.height / 4
    }
    else {
        player2UltimateChosen.x = player2CharacterChosen.x - player2UltimateChosen.width
        player2UltimateChosen.y = player2CharacterChosen.y + player2CharacterChosen.height / 4
    }
    player2DrawUltimateMeleeRect()
    player2UltimateAnimationRight = requestAnimationFrame(player2UltimateMeleeAttack)
    if (checkOverlap(player2UltimateChosen, characterChosen)) {
        if (!player2UltimateHasDamageBeenTaken) {
            player2UltimateHasDamageBeenTaken = true
            console.log("Overlap detected!");
            characterChosen.health = characterChosen.health - player2UltimateChosen.damage
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
        }
    } else {
        console.log("No overlap detected.");
    }

}
function player2UltimateMeleeDuration() {
    cancelAnimationFrame(player2UltimateAnimationRight)
}
function player2UltimateDamageCooldown() {
    player2UltimateHasDamageBeenTaken = false
}
// Projectile ultimate
function player2DrawUltimateProjRect() {
    ctx.fillStyle = player2UltimateChosen.color;
    ctx.fillRect(player2UltimateChosen.x, player2UltimateChosen.y, player2UltimateChosen.width, player2UltimateChosen.height);
}

function player2UltimateProjectileAttack() {
    if (player2IsLookingRight) {
        player2UltimateChosen.x += player2UltimateChosen.projSpeed
    }
    else{
        player2UltimateChosen.x -= player2UltimateChosen.projSpeed
    }
    player2DrawUltimateProjRect()
    player2UltimateAnimationRight = requestAnimationFrame(player2UltimateProjectileAttack)
    if (checkOverlap(player2UltimateChosen, characterChosen)) {
        if (!player2UltimateHasDamageBeenTaken) {
            player2UltimateHasDamageBeenTaken = true
            console.log("Overlap detected!");
            characterChosen.health = characterChosen.health - player2UltimateChosen.damage
            console.log(characterChosen.health)
            healthDisplayUpdate()
            checkForDead()
        }
    } else {
        console.log("No overlap detected.");
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



let characterChosen = "notpicked"
let projectileChosen = "notpicked"
let meleeChosen = "notpicked"
let ultimateChosen = "notpicked"
let player2CharacterChosen = archerPlayer2
let player2ProjectileChosen = arrowPlayer2
let player2MeleeChosen = bowPunchPlayer2
let player2UltimateChosen = flamingArrowPlayer2


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

//Character select
let characterSelected = 0

const characterArcher = document.getElementById("archer")
characterArcher.addEventListener("click", changeArcher)
function changeArcher() {
    movement(archer)
    characterSelected = 3
    characterChosen = archer
    projectileChosen = arrow
    meleeChosen = bowPunch
    ultimateChosen = flamingArrow
}

const characterTank = document.getElementById("tank")
characterTank.addEventListener("click", changeTank)
function changeTank() {
    movement(tank)
    console.log(allRound.x)
    characterSelected = 2
    characterChosen = tank
    projectileChosen = rockThrow
    meleeChosen = punch
    ultimateChosen = smashPunch
}

const characterallRound = document.getElementById("allRound")
characterallRound.addEventListener("click", changeAllround)
function changeAllround() {
    movement(allRound)
    characterSelected = 1
    characterChosen = allRound
    projectileChosen = gunshot
    meleeChosen = whip
    ultimateChosen = junglePunch
}


// console.log(arrow2.height, arrow2.width, arrow2.color, arrow2.projSpeed, arrow2.x_velocity, arrow2.gravity, arrow2.y_velocity, arrow2.y_startvelocity)
//ctx.clearRect(0, 0, canvas.width, canvas.height); // Tømmer canvasen