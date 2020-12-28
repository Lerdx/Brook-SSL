var slider=document.querySelectorAll('.img-galeria');
var sliderLight=document.querySelector('.agregar-imagen')
var contenedorLight=document.querySelector('.imagen-light')
var hamburger=document.querySelector('.hamburger');
var clos=document.querySelector('.close')
var atras=document.querySelector('.atras')
var adel=document.querySelector('.adelante');

slider.forEach(beibi =>{
    beibi.addEventListener('click',()=>{
        aparecerImagen( beibi.getAttribute('src'))
    })

})

var imgArray=['img/img1.jpg','img/img2.jpg','img/img3.jpg',
        'img/img4.jpg','img/img5.jpg','img/img6.jpg'],
    cont=0;

function carrusel(c){
        c.addEventListener('click',e => {
        let atras=c.querySelector('.atras'),
             adel=c.querySelector('.adelante'),
             img=c.querySelector('#imagen'),
             tgt=e.target;
        
        if(tgt == atras){
            if(cont > 0){
                img.src = imgArray[cont-1];
                cont--;
            }
            else{
                img.src=imgArray[imgArray.length-1];
                cont=imgArray.length-1;
            }
        }
        else if(tgt==adel){

            if(cont < imgArray.length - 1){
                img.src=imgArray[cont+1];
                cont++;
            }
            else{
                img.src=imgArray[0];
                cont=0;
            }
        }

        
    });
}

carrusel(contenedorLight);


contenedorLight.addEventListener('click',(e)=>{
    //console.log(e.target)
    
    if(e.target == clos && e.target !=(atras && adel)){
        contenedorLight.classList.toggle('show');
        sliderLight.classList.toggle('showImage');
        hamburger.style.opacity='1';
    }
})



var aparecerImagen=(beibi)=>{
    sliderLight.src=beibi;
    contenedorLight.classList.toggle('show');
    sliderLight.classList.toggle('showImage');
    hamburger.style.opacity='0';
    
}
