var s=parseInt(window.prompt("digite um valor"));
var m=parseInt(window.prompt("digite outro valor"));

if(s==m){
    window.alert("valores são iguais");
}else{
    window.alert("valores são diferentes");
}
if(s<=0 || m<=0){
    window.alert("você digitou um valor negativo");
}