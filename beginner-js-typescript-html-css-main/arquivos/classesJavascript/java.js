function Data(){
    var data=new Date();
    var dataDefinida=new Date(2000,10,2);
    alert(data.getSeconds());
    alert(data.getUTCDate());
    alert(data.getMinutes());
    alert(data.getUTCFullYear());
    data.setDate(18/03/2002)
}
function math(){
    var math,s;
    math=10;
    s=Math.round(math);
    window.alert("o maior valor é:"+Math.max(s,math));
    window.alert("o menor valor é:"+Math.min(s,math));
}