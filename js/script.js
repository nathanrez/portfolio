const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    nav.classList.toggle("active");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    nav.classList.remove("active");
});
});


