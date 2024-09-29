const ContenPalavra = document.getElementById('wordContainer');
const startButton = document.getElementById('startButton');
const palavrasUsuarioElement = document.getElementById('usedLetters');
const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.heigth = 0;

const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];

let palavraSelecionada
let palavraUsuario
let erros
let acertos


const addPalavra = palavra => {
    const palavraElement = document.createElement('span')
    palavraElement.innerHTML = palavra.toUpperCase()
    palavrasUsuarioElement.appendChild(palavraElement)
}

const addBodyPart = bodyParts => {
    ctx.fillStyle = '#fff'
    ctx.fillRect(...bodyParts)
}

const wrongPalavra = () => {
    addBodyPart(bodyParts[erros])
    erros++
    if(erros === bodyParts.length){
        endGame()
    }
}

const endGame = () => {
    document.removeEventListener('keydown',palavraEvento)
    startButton.style.display = 'block'
}

const palavraCorreta = palavra => {
    const {children} = ContenPalavra
    for(let i=0; i < children.length; i++){
        if(children[i].innerHTML === palavra){
            children[i].classList.toggle('hidden');
            acertos++
        }
    }
    if(acertos === palavraSelecionada.length){
        endGame()
    }
}

const palavraInput = palavra => {
    if (palavraSelecionada.includes(palavra)) {
        palavraCorreta(palavra)
    }else{
        wrongPalavra()
    }

    addPalavra(palavra)
    palavraUsuario.push(palavra)
}

const palavraEvento = event => {
    let newWord = event.key.toUpperCase();
    if(newWord.match(/^[a-zñ]$/i) && !palavraUsuario.includes(newWord)){
        palavraInput(newWord)
    }
}

const drawWord  = () => {
    palavraSelecionada.forEach(palavras => {
        const palavrasElement = document.createElement('span')
        palavrasElement.innerHTML = palavras.toUpperCase()
        palavrasElement.classList.add('letter')
        palavrasElement.classList.add('hidden')
        ContenPalavra.appendChild(palavrasElement)
    });
}

const selectRandomWord = () => {
    let palavra = words[Math.floor((Math.random() * words.length))].toUpperCase()
    palavraSelecionada = palavra.split('')
}

const desenharForca = () => {
    ctx.canvas.width = 120
    ctx.canvas.height = 160
    ctx.scale(20,20)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = '#21BB50'
    ctx.fillRect(0,7,4,1)
    ctx.fillRect(1,0,1,8)
    ctx.fillRect(2,0,3,1)
    ctx.fillRect(4,1,1,1)
}

const inicioDoJogo = () => {
    palavraUsuario = []
    erros = 0
    acertos = 0
    ContenPalavra.innerHTML = ''
    palavrasUsuarioElement.innerHTML = ''
    startButton.style.display = 'none'
    desenharForca()
    selectRandomWord()
    drawWord()
    document.addEventListener('keydown',palavraEvento)
}

startButton.addEventListener('click',inicioDoJogo)