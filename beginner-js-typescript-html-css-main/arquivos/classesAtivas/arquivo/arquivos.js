let langs = document.querySelector(".langs"),link=document.querySelectorAll("a"),titulo=document.querySelector(".titulo"),descricao=document.querySelector(".descricao")

link.forEach(el=>{
    el.addEventListener("click",()=>{
        langs.querySelector(".active").classList.remove("active")
        el.classList.add("active");
        let attr=el.getAttribute("language")

        titulo.textContent=data[attr].titulo
        descricao.textContent=data[attr].descricao
    })
})

let data = {
    portuguese: {
        titulo="ola mundo",
        descricao="asasasas",
    },
    english: {
        titulo="testing",
        descricao="nothing"
    },
    russian: {
        titulo="testing",
        descricao="testing"
    }

}