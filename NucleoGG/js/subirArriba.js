// SCROLL UP

document.getElementById('ir-arriba').addEventListener('click',scrollUp);

function scrollUp(){

    var currentScroll=document.documentElement.scrollTop;

    if(currentScroll>0){
        window.scrollTo(0,0);
    }
}

buttonUp=document.getElementById('ir-arriba');

window.onscroll=function(){
    var scroll=document.documentElement.scrollTop;

    if(scroll>100){
        buttonUp.style.transform='scale(1)';
    }
    else if(scroll<100){

        buttonUp.style.transform='scale(0)'
    }
}