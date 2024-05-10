score = 0;
cross = true;
let mySound = new Audio('Kibutsuji-Muzan-Theme-3.mp3');

document.onkeydown = (e) => {
    
    console.log(e.keyCode);
    
    if (e.keyCode == 38) {
        tanji = document.querySelector(".tanjiro");
        tanji.classList.add("animateTanjiro");

        setTimeout(() => {
            tanji.classList.remove("animateTanjiro");
        }, 800);
    }

    else if (e.keyCode == 39) {
        tx = parseInt(window.getComputedStyle(tanji, null).getPropertyValue("left"));
        
        tanji.style.left = tx + 112 + "px";
        
    }
    else if (e.keyCode == 37) {
        tanji = document.querySelector(".tanjiro");
        tx = parseInt(window.getComputedStyle(tanji, null).getPropertyValue("left"));
        
        tanji.style.left = tx - 112 + "px";
        
    }
    
    
    
}

setInterval(() => {
    tanji = document.querySelector(".tanjiro");
    gameOver = document.querySelector(".gameOver");
    tanji = document.querySelector(".tanjiro");
    akaza = document.querySelector(".akaza");
    
    tx = parseInt(window.getComputedStyle(tanji, null).getPropertyValue("left"));
    ty = parseInt(window.getComputedStyle(tanji, null).getPropertyValue("bottom"));
    
    ax = parseInt(window.getComputedStyle(akaza, null).getPropertyValue("left"));
    ay = parseInt(window.getComputedStyle(akaza, null).getPropertyValue("bottom"));
    
    offSetX = Math.abs(tx - ax);
    offSetY = Math.abs(ty - ay);
    
    
    if(offSetX >= 50 && offSetY >= 50){
        mySound.play();
    }
    if (offSetX < 50 && offSetY < 50) {
        gameOver.style.visibility = "visible";
        akaza.classList.remove("animateAkaza");
        mySound.pause();
    }
    else if (cross && offSetX < 50) {
        score += 100;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(akaza, null).getPropertyValue("animation-duration"));
            let newDur = aniDur;
            if (score == 5) {
                newDur = aniDur - 0.3;
            }
            else if (score == 10) {
                newDur = aniDur - 0.3;
            }
            else if (score == 12) {
                newDur = aniDur - 0.2;
            }
            else if (score == 15) {
                newDur = aniDur - 0.2;
            }
            else if (score == 20) {
                newDur = aniDur - 0.2;
            }
            else if (score == 25) {
                newDur = aniDur - 0.3;
            }
            akaza.style.animationDuration = newDur + "s";


        }, 300);


    }


}, 10);

scoreCont = document.querySelector(".score");
function updateScore(score) {
    scoreCont.innerHTML = "Score: " + score;
}