score = 0;
cross = true;

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
        tanji = document.querySelector(".tanjiro");
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
    gameOver = document.querySelector(".gameOver");
    tanji = document.querySelector(".tanjiro");
    akaza = document.querySelector(".akaza");

    tx = parseInt(window.getComputedStyle(tanji, null).getPropertyValue("left"));
    ty = parseInt(window.getComputedStyle(tanji, null).getPropertyValue("bottom"));

    ax = parseInt(window.getComputedStyle(akaza, null).getPropertyValue("left"));
    ay = parseInt(window.getComputedStyle(akaza, null).getPropertyValue("bottom"));

    offSetX = Math.abs(tx - ax);
    offSetY = Math.abs(ty - ay);

    console.log(offSetX, offSetY);

    if (offSetX < 70 && offSetY < 50) {
        gameOver.style.visibility = "visible";
        akaza.classList.remove("animateAkaza");
    }
    else if (cross && offSetX < 70) {
        score += 1;
        updateScore(score);
        cross = false;

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(akaza, null).getPropertyValue("animation-duration"));
            let newDur = aniDur;
            if (score == 5) {
                newDur = aniDur - 0.2;
            }
            else if (score == 10) {
                newDur = aniDur - 0.2;
            }
            else if (score == 12) {
                newDur = aniDur - 0.2;
            }
            else if (score == 15) {
                newDur = aniDur - 0.2;
            }
            akaza.style.animationDuration = newDur + "s";


        }, 500);

        setInterval(() => {
            cross = true;
        }, 1000)

    }


}, 10);

scoreCont = document.querySelector(".score");
function updateScore(score) {
    scoreCont.innerHTML = "Score: " + score;
}