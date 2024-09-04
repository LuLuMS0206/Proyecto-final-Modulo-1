//Menu desplegable
// const changeNavbar = document.getElementById("changeNavbar");
// const navbar = document.getElementById("navbar");

// changeNavbar.addEventListener("click", (event) => {
//     if (navbar.style.display === "" || navbar.style.display === "none") {
//         navbar.style.display = "block";
//         console.log(changeNavbar)
//         console.log(navbar)

//     } else {
//         navbar.style.display = "none";
//     }
// });

let menuState = false;
const changeNavbar = document.getElementById("changeNavbar");
const navbar = document.getElementById("navbar");

changeNavbar.addEventListener("click", (event) => {
    openMenu();
});

function openMenu(){
    menuState = !menuState
    menuState ? navbar.style.display = "block" : navbar.style.display = "none";
}
