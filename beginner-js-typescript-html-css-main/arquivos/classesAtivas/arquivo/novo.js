let navbar=document.querySelector(".navbar")

window.addEventListener("scroll",()=>{
    if(this.scroll==20){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky")
    }
})


/*usando addEventListener 

noQueVaiAcontecerOEvento.addEventListener("tipoDeAção",()=>{
CODIGO

})



*/