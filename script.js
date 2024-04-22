//menu desplegable
const changeNavbar = document.getElementById("changeNavbar");
const navbar = document.getElementById("navbar");

changeNavbar.addEventListener("click", (event) => {
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
        console.log(changeNavbar)
        console.log(navbar)
    } else {
        navbar.style.display = "none";
    }
});

//boton go home
const button_scroll = document.getElementById("button__go_home");
const body = document.getElementById("body");

button_scroll.addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, 200);
});