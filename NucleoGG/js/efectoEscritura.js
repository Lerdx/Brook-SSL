var text=document.getElementById('titulo');
var str=text.innerHTML;
text.innerHTML='';

var speed = 50;

var i=0;

function typeWrite(){
    if(i<str.length){
        text.innerHTML+=str.charAt(i);
        i++
        setTimeout(typeWrite,speed);
    }
}
setTimeout(typeWrite,speed);