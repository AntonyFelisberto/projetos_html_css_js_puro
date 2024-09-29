var x=0;
var i,tabu,numero,str;
while(x<=10){
    do{
        numero=parseInt(window.prompt("digite um numero para fazer a tabuada"));
    }while(numero<0);
   for(i=0;i<=10;i=i+1){
      tabu=numero*i;
      window.alert(tabu);
   }
    x++;
}
