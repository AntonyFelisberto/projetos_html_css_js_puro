//fazendo conversões
var nome=String(window.prompt("digite seu nome"));
var idade;
do{
 idade=parseInt(window.prompt("digite sua idade"));
 if(idade<=0){
     alert("digite um numero correto")
 }
}while(idade<=0);

let salario=parseFloat(window.prompt("digite seu salario"));
const cpf=String(window.prompt("digite seu cpf"));
prov=parseInt(0)

while(prov!=1){
    prov=window.prompt("quer sair do laço digite 1");
}

//usando arrays
var lista=["primeiro","segundo","terceiro"]
var listagem={nome:"valor",idade:11,tipo:11.0,verdade:false}
var listaComMaisListasDentro=[{nome:"valor",idade:11,tipo:11.0,verdade:false},{nome:"nome",idade:13,tipo:11.2,verdade:true}]
var array=[];//lista vazia


for (let index = 0;  index < 2; index++) {
    //preenchendo a lista vazia de acordo com a posição do for
    array[index]=window.prompt("digite")
}

var looping,loopingAoContrario;
looping=0;
loopingAoContrario=100;
while(loopingAoContrario>0){
    while(looping<100){
       looping++;
    }
    loopingAoContrario--;
}
do{
    while(looping>0){
        looping--;
     }
     loopingAoContrario++;
}while(loopingAoContrario!=100);

alert(listaComMaisListasDentro[0].nome)
alert(listagem.nome)//valor da estrutura
alert(lista[1])//valor do array

/*document.  seleciona varios metodos dom   
/*lista.     ao selecionar um array você tem acesso a varios metodo ja prontos
/*cpf.       você tem acesso a varios metodos ja prontos ao selecionar uma string*/
alert("ola sr "+nome+" sua idade é "+idade);