

const dino = document.querySelector('.dino');
/*constante o valor nunca podera ser modificado*//*querySelector-Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.*/

const background=document.querySelector('.fundo');
/*constante o valor nunca podera ser modificado*//*querySelector-Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.*/

let position = 0;
let isJumping=false;

function handleKeyUp(event){
                         /*event é enviado pra função toda vez que alguem aperta um botão-ou seja ele verifica qual botão foi pressionado*/ 
    if(event.keyCode===32){
       /*event.keyCode-verifica se a tecla pressionada foi a tecla esperada,https://keycode.info/ ,use esse site para saber quais os codigos das teclas*/ 
       console.log("evento botão pressionado");//tem que abrir o inspecionar para verificar
    if(!isJumping){//verifica se a função de pulo ja esta sendo executada
      jump();//chama a função de pulo
    }  
    }
}

function jump(){
    isJumping=true;//diz se a variavel esta pulando ou não
    let upInterval=setInterval(()=>{
      if(position>=150){
        clearInterval(upInterval);//limpa o tempo de subida
        //clearInterval () cancela uma ação cronometrada
        let downInterval=setInterval(()=>{
          if(position<=0){
            
            clearInterval(downInterval);//limpa o tempo de descida
            //clearInterval () cancela uma ação cronometrada
            isJumping=false;//diz se a variavel esta pulando ou não
          }else{
            position-=20;   
            //posicao=posicao-20;
            dino.style.bottom = position + 'px';
            //diz qual será a nova posição da variavel
          }
        }, 20);
           //tempo de delay de descer
      }else{
        position+=20;
       //posicao=posicao+20;
       dino.style.bottom = position + 'px';//não funciona
       //diz qual será a nova posição da variavel
      }
    }, 20);
      //tempo de delay de subir
}

function createCactus(){
  const cactus=document.createElement('div');//cria uma div pro cactus aparecer
  let cactusPosition = 1000;//posição onde aparece

  cactus.classList.add('cactus');//propriedade classList retorna o nome da classe do elemento, como DOMTokenList objeto. Esta propriedade é usada no elemento para adicionar, remover e alternar classe CSS. 
  cactus.style.left=1000 + 'px';//qual posição o cactus deve ir
  background.appendChild(cactus);
            //appendChild() vai inserir o elemento no html
}
createCactus();//chama a função
document.addEventListener('keyup',handleKeyUp);
         /*addEventListener-diz se ocorreu um evento que você definiu para ver mais eventos addEventListener(ctrl+espaço)*/
                                 /*caso a pessoa aperte a tecla executa a function handleKeyUp*/ 


                                 