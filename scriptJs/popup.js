
//Popup

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


//cierre del popup con tecla esc.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        contentPopup.style.display = 'none';
    }
});
