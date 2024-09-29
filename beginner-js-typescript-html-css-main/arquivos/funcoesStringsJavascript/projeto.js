function verify(){
    var str=document.getElementById('str');
    var std=str.value;
    window.alert("o tamanho do valor digitado é "+std.length);
    window.alert(std.search("hello"));
    window.alert("letars em maiusculo:"+std.toUpperCase());
    window.alert("letras em minusculo:"+std.toLowerCase());
    window.alert("o tipo do valor digitado é "+typeof(std));
    window.alert("o valor digitado é "+std);
    Data(50);
}
function Data(varta){
    var data=new Date();
    var dataDefinida=new Date(2000,10,2);
    alert(data.getSeconds());
    alert(data.getUTCDate());
    alert(data.getMinutes());
    alert(data.getUTCFullYear());
    alert(varta);
}