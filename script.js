const buttonDraw = document.querySelector(".button-draw")

function cliqueiNoBotao() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    
    const max = Math.floor(document.querySelector(".input-max").value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert (result)


}


buttonDraw.addEventListener("click", cliqueiNoBotao)
