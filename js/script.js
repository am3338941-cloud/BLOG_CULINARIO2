
const btnModoOscuro = document.getElementById("modoOscuroBtn");

btnModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
  btnModoOscuro.textContent = document.body.classList.contains("oscuro") ? "⚪" : "⚫";
});
const menuToggle = document.getElementById("menuToggle");
const menuNav = document.getElementById("menuNav");

menuToggle.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});

const menuLinks = menuNav.querySelectorAll("a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuNav.classList.remove("active");
  });
});
