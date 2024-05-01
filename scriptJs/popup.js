

//Popup

const close = document.getElementById("close");
const contentPopup = document.getElementById("content-popup");

let showPopup = localStorage.getItem("showPopup");

// Mostrar el popup después de 5 segundos
setTimeout(() => {
    if (showPopup !== "false") {
        contentPopup.style.display = 'initial';
        localStorage.setItem("showPopup", "false");
    }
}, 5000);

// Mostrar el popup cuando se haya desplazado al 25% de la página
window.addEventListener("scroll", () => {
    if (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) >= 0.25 && showPopup !== "true") {
        contentPopup.classList.add("opened"); // Agrega la clase "opened" al contentPopup
        localStorage.setItem("showPopup", "true");
    }
});



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


//validar formulario del popup 

    const nameInput = document.getElementById("popupNameInput");
    const emailInput = document.getElementById("popupEmailInput");
    const submitBtn = document.getElementById("popupSubmitBtn");

    submitBtn.addEventListener("click", () => {
        const name = nameInput.value;
        const email = emailInput.value;

        // Validar que se haya ingresado un nombre y una dirección de correo electrónico válida
        if (!name || !email || !isValidEmail(email)) {
            alert("Por favor, ingrese un nombre válido y una dirección de correo electrónico válida.");
            return;
        }

        // si los datos introducidos son correctos 
        alert("¡Gracias por suscribirte!");
    });

    // Función para validar una dirección de correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    }
