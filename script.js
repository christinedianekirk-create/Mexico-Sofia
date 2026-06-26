// Contraseña correcta
const PASSWORD = "12345678";

// Elementos
const loginScreen = document.getElementById("login-screen");
const appContent = document.getElementById("app-content");
const loginBtn = document.getElementById("login-btn");
const loginPass = document.getElementById("login-pass");
const loginError = document.getElementById("login-error");

// Evento del botón
loginBtn.addEventListener("click", () => {
  const pass = loginPass.value.trim();

  if (pass === PASSWORD) {
    loginScreen.style.display = "none";
    appContent.style.display = "block";
  } else {
    loginError.textContent = "Contraseña incorrecta";
  }
});
