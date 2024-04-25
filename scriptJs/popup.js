
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


//validar formulario del popup <script>

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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
