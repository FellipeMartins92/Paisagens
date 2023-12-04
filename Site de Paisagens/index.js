const fotos = document.querySelectorAll(".imagens")
const fundo = document.getElementById("middle")
fotos.forEach((evt)=>{
    evt.addEventListener("click",(el)=>{
        let imgurl = el.target.src
        imgurl = imgurl.slice(22)
        fundo.style.backgroundImage = `url(${imgurl})`;
    })
})