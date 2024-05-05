document.onkeydown = (e)=>{
    
    console.log(e.keyCode);

    if(e.keyCode == 38){
        tanji = document.querySelector(".tanjiro");
        tanji.classList.add("animateTanjiro");

        setTimeout(()=>{
            tanji.classList.remove("animateTanjiro");
        }, 800);
    }


}