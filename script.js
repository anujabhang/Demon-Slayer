document.onkeydown = (e)=>{
    
    console.log(e.keyCode);

    if(e.keyCode == 38){
        tanji = document.querySelector(".tanjiro");
        tanji.classList.add("animateTanjiro");

        setTimeout(()=>{
            tanji.classList.remove("animateTanjiro");
        }, 800);
    }
    
    else if(e.keyCode == 39){
        tanji = document.querySelector(".tanjiro");
        tx = parseInt(window.getComputedStyle(tanji, null).getPropertyValue("left"));
        
        tanji.style.left = tx + 112 + "px";

    }
    else if(e.keyCode == 37){
        tanji = document.querySelector(".tanjiro");
        tx = parseInt(window.getComputedStyle(tanji, null).getPropertyValue("left"));
        
        tanji.style.left = tx - 112 + "px";

    }

    
    
}

setInterval(()=>{
    gameOver = document.querySelector(".gameOver");
    akaza = document.querySelector(".akaza");

    tx = parseInt(window.getComputedStyle(tanji, null).getPropertyValue("left"));
    ty = parseInt(window.getComputedStyle(tanji, null).getPropertyValue("bottom"));

    ax = parseInt(window.getComputedStyle(akaza, null).getPropertyValue("left"));
    ay = parseInt(window.getComputedStyle(akaza, null).getPropertyValue("top"));

    offSetX = Math.abs(tx - ax);
    offSetY = Math.abs(ty - ay);


}, 100);