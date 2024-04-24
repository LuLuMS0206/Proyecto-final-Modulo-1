
//Slider
//tiene que ir en una clase
const imagenes = [
    "img/imagen1.jpg",
    "img/imagen2.jpg",
    "img/imagen3.jpg",
    "img/imagen4.jpg"
];

document.imagen.src = imagenes[0];

const sliderDerecho = document.querySelector(".slider-derecho");
const sliderIzquierdo = document.querySelector(".slider-izquierdo");
let contador = 0;


//funcion para el icono derecho
function moverDerecha() {
    contador++;
    if (contador > imagenes.length - 1) {
        contador = 0;
    }
    document.imagen.src = imagenes[contador];
}

sliderDerecho.addEventListener("click", moverDerecha);

//funcion para el icono izq
function moverIzquierda(){
contador--;
if(contador < 0){
    contador = imagenes.length - 1;
}
document.imagen.src = imagenes[contador];
}
sliderIzquierdo.addEventListener("click", moverIzquierda);