//menu desplegable
const changeNavbar = document.getElementById("changeNavbar");
const navbar = document.getElementById("navbar");

changeNavbar.addEventListener("click", (event) => {
    if (navbar.style.display === "" || navbar.style.display === "none") {
        navbar.style.display = "block";
        console.log(changeNavbar)
        console.log(navbar)

    } else {
        navbar.style.display = "none";
    }
});



//boton go home
const button_scroll = document.getElementById("btn_scroll");
const body = document.getElementById("body");

button_scroll.addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, 200);
});

//scroll
window.addEventListener('load', () => {
    const scrollerProgress = document.getElementById('scrollerProgress');
    requestAnimationFrame(scroll);
}
)

function scroll () {
    scrollerProgress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight)*100)}%`;
    requestAnimationFrame(scroll);
}

//validación del formulario

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputCheckbox = document.getElementById('check');

 //Funcion validacion nombre

 const validName = () => {
    // Si la longitud del valor introducido es menor a 2 o mayor a 100
    if(inputName.value.length <= 2 || inputName.value.length > 100) {
        //Asignamos el borde del input de color rojo
        inputName.style.border = '0.2rem solid #FB3B64';
        return false;
    } else {
        //Asignamos el borde del input de color verde
        inputName.style.border = '0.2rem solid #63eabf74';
        return true;
    }
}
inputName.onchange = () => validName(); //Asignamos el evento onchange a nuestro input y cada vez que cambie su estado llama a la funcion validName();

 //Funcion validación email

 const validEmail = () => {
    //Cuando el valor del inputEmail sea diferente a la variable con la expresion regular
    if(!regex.test(inputEmail.value)) {
        //Asignamos el borde del input de color rojo
        inputEmail.style.border = '0.2rem solid #FB3B64';
        return false
    } else {
        //Asignamos el borde del input de color verde
        inputEmail.style.border = '0.2rem solid #63eabf74';
        return true
    }
}

inputEmail.onchange = () => validEmail(); //Asignamos el evento onchange a nuestro inputEmail y cada vez que cambie su estado llama a la funcion validEmail();

//Funcion validacion checkbox

const validCheck = () => {
    //Si nuestro check es distinto de checked
    if(!inputCheckbox.checked) {
        //Asignamos el borde del input de color rojo
        inputCheckbox.style.border = '0.2rem solid #FB3B64';
        return false;
    } else {
        //Dejamos nuestro input por defecto
        inputCheckbox.style.border = '';
        return true;
    }
}

inputCheckbox.onchange = () => validCheck();//Asignamos el evento onchange a nuestro check y cada vez que cambie su estado llama a la funcion validCheck();

//slider

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

//popup

const close = document.getElementById("close");
const contentPopup = document.getElementById("content-popup");

//mostrar el popup despues de 5 segundos
setTimeout(() => {
    contentPopup.style.display = 'initial'
}, 5000);


//cierre del popup con close
close.addEventListener("click", (event) => {
    contentPopup.style.display = 'none';
});

//cierre del popup pinchando fuera del popup
contentPopup.addEventListener('click', (event) =>{
    contentPopup.style.display = 'none';
});

//cierre del popup con tecla esc.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        contentPopup.style.display = 'none';
    }
});
