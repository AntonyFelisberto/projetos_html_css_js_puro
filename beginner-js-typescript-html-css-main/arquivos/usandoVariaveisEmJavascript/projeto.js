do{
    var nome=String(window.prompt("digite seu nome"));
}while(nome=="");
var idade=BigInt(window.prompt("digite sua idade numero")); 
var numero;
numero=window.prompt("digite um numero")        
window.alert("seu nome é "+nome+" sua idade é "+idade);

function dsd(){
    if(nome!=null && idade>50){
      document.getElementById("sds").innerHTML="<h1>ola "+nome+"o numero que você digitou foi "+numero+" sua idade é "+idade+" idoso</h1>";
      document.getElementById("sds").style.color="blue"
    }else if(nome!=null && idade>0 && idade<=49){
        document.getElementById("sds").innerHTML="<h1>ola "+nome+" o numero que você digitou foi "+numero+" sua idade é "+idade+" se considere jovem</h1>";
        document.getElementById("sds").style.color="blue"   
    }else{
        document.getElementById("sds").innerHTML="<h1>preencha os dados corretamente</h1>";  
        document.getElementById("sds").style.color="blue"
    }
}