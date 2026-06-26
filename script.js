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
