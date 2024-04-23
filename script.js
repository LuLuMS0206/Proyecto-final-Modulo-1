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

// changeNavbar.addEventListener("click", (event) => {


//     const computedStyle = window.getComputedStyle(navbar);
//     const displayStyle = computedStyle.getPropertyValue("display");

//     console.log(computedStyle)
//     console.log(displayStyle)
//     if (displayStyle === "none") {
//         navbar.style.display = "block";
//         console.log("El estilo de 'navbar' era 'none' y se cambió a 'block'");
//     } else {
//         navbar.style.display = "none";
//         console.log("El estilo de 'navbar' era diferente de 'none' y se cambió a 'none'");
//     }
// });

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