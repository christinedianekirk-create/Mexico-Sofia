// LOGIN
const loginBtn = document.getElementById("login-btn");
const loginPass = document.getElementById("login-pass");
const loginError = document.getElementById("login-error");
const loginScreen = document.getElementById("login-screen");
const appContent = document.getElementById("app-content");

loginBtn.addEventListener("click", () => {
  if (loginPass.value === "12345678") {
    loginScreen.style.display = "none";
    appContent.style.display = "block";
  } else {
    loginError.textContent = "Contraseña incorrecta";
  }
});

// MENÚ
const menuItems = document.querySelectorAll(".menu-item");
const mainPage = document.getElementById("main-page");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const page = item.getAttribute("data-page");

    mainPage.innerHTML = `
      <h2>${item.textContent}</h2>
      <p>Sección: ${page}</p>
    `;
  });
});
if (page === "finanzas") {
  mainPage.innerHTML = `
    <h2>Finanzas</h2>
    <p>Herramientas para organizar dinero, gastos y metas.</p>
  `;
}
if (page === "salud") {
  mainPage.innerHTML = `
    <h2>Salud</h2>
    <p>Información básica, cuidados y recursos.</p>
  `;
}
