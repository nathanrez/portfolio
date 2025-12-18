const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    nav.classList.toggle("active");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    nav.classList.remove("active");
});
});

function downloadCV() {
    const link = document.createElement("a");
    link.href = "assets/docs/NathanRezende_Curriculo";
    link.download = "NathanRezende_Curriculo.pdf";
    link.click();
}

// ===== MODAL SOBRE =====
const btnSobre = document.getElementById("btnSobre");
const sobreModal = document.getElementById("sobreModal");
const closeModalBtn = document.querySelector(".modal-close");

// Abrir modal
btnSobre.addEventListener("click", () => {
  sobreModal.classList.add("active");
  document.body.classList.add("modal-open");
});

// Fechar modal (botão X)
closeModalBtn.addEventListener("click", () => {
  fecharModal();
});

// Fechar clicando fora do modal
sobreModal.addEventListener("click", (e) => {
  if (e.target === sobreModal) {
    fecharModal();
  }
});

// Fechar com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sobreModal.classList.contains("active")) {
    fecharModal();
  }
});

function fecharModal() {
  sobreModal.classList.remove("active");
  document.body.classList.remove("modal-open");
}
