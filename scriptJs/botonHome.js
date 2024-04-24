//Boton go home
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