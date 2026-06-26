//const loginBtn = document.getElementById("login-btn");
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
}); const loginBtn = document.getElementById("login-btn");
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
});LOGIN
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
if (page === "educacion") {
  mainPage.innerHTML = `
    <h2>Educación</h2>
    <p>Cursos, guías y materiales para aprender.</p>
  `;
}
if (page === "recetas") {
  mainPage.innerHTML = `
    <h2>Recetas</h2>
    <p>Comidas, postres y preparaciones fáciles.</p>
  `;
}
if (page === "motivacion") {
  mainPage.innerHTML = `
    <h2>Motivación</h2>
    <p>Frases, apoyo y ánimo para la familia.</p>
  `;
}
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

if (page === "educacion") {
  mainPage.innerHTML = `
    <h2>Educación</h2>
    <p>Cursos, guías y materiales para aprender.</p>
  `;
}

if (page === "recetas") {
  mainPage.innerHTML = `
    <h2>Recetas</h2>
    <p>Comidas, postres y preparaciones fáciles.</p>
  `;
}

if (page === "motivacion") {
  mainPage.innerHTML = `
    <h2>Motivación</h2>
    <p>Frases, apoyo y ánimo para la familia.</p>
  `;
}
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

if (page === "educacion") {
  mainPage.innerHTML = `
    <h2>Educación</h2>
    <p>Cursos, guías y materiales para aprender.</p>
  `;
}

if (page === "recetas") {
  mainPage.innerHTML = `
    <h2>Recetas</h2>
    <p>Comidas, postres y preparaciones fáciles.</p>
  `;
}

if (page === "motivacion") {
  mainPage.innerHTML = `
    <h2>Motivación</h2>
    <p>Frases, apoyo y ánimo para la familia.</p>
  `;
}
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

if (page === "educacion") {
  mainPage.innerHTML = `
    <h2>Educación</h2>
    <p>Cursos, guías y materiales para aprender.</p>
  `;
}

if (page === "recetas") {
  mainPage.innerHTML = `
    <h2>Recetas</h2>
    <p>Comidas, postres y preparaciones fáciles.</p>
  `;
}

if (page === "motivacion") {
  mainPage.innerHTML = `
    <h2>Motivación</h2>
    <p>Frases, apoyo y ánimo para la familia.</p>
  `;
}
/* ============================================
   SOFÍA — Navegación estilo Slack
   ============================================ */

// Seleccionar elementos
const menuItems = document.querySelectorAll(".menu-item");
const main = document.querySelector(".main");

// Pantallas base (se irán reemplazando dinámicamente)
const screens = {
    "Inicio": `
        <div class="title">Bienvenida a SOFÍA</div>

        <div class="card">
            <h3>Tu Web App estilo Slack</h3>
            <p>Sidebar oscuro, tarjetas redondeadas, colores Slack, diseño profesional.</p>
        </div>

        <div class="card">
            <h3>50 Tiendas Lovely Day</h3>
            <p>Listas para integrarse en las siguientes pantallas.</p>
        </div>

        <div class="card">
            <h3>Cursos y Guías</h3>
            <p>Todo organizado para tu familia en México.</p>
        </div>

        <div class="card">
            <h3>Videos Aesthetic</h3>
            <p>Ambientes de café, lluvia, limpieza, naturaleza y más.</p>
        </div>
    `,

    "Tiendas Lovely Day": `
        <div class="title">Tiendas Lovely Day</div>
        <p class="section-title">50 tiendas listas para integrar</p>

        <div class="grid">
            <div class="card"><h3>Tienda 1</h3><p>Descripción aquí…</p></div>
            <div class="card"><h3>Tienda 2</h3><p>Descripción aquí…</p></div>
            <div class="card"><h3>Tienda 3</h3><p>Descripción aquí…</p></div>
        </div>
    `,

    "Cursos y Guías": `
        <div class="title">Cursos y Guías</div>

        <div class="grid">
            <div class="card"><h3>Curso 1</h3><p>Contenido del curso…</p></div>
            <div class="card"><h3>Mini Curso</h3><p>Contenido del mini curso…</p></div>
            <div class="card"><h3>Guía</h3><p>Contenido de la guía…</p></div>
        </div>
    `,

    "Recetarios": `
        <div class="title">Recetarios</div>

        <div class="grid">
            <div class="card"><h3>Postres</h3><p>Recetas dulces…</p></div>
            <div class="card"><h3>Bolis</h3><p>Recetas frías…</p></div>
            <div class="card"><h3>Gelatinas</h3><p>Recetas creativas…</p></div>
        </div>
    `,

    "PLR / MRR": `
        <div class="title">PLR / MRR</div>

        <div class="grid">
            <div class="card"><h3>Pack PLR</h3><p>Contenido editable…</p></div>
            <div class="card"><h3>Pack MRR</h3><p>Derechos de reventa…</p></div>
        </div>
    `,

    "Videos Aesthetic": `
        <div class="title">Videos Aesthetic</div>

        <div class="grid">
            <div class="card"><h3>Café</h3><p>Ambiente cálido…</p></div>
            <div class="card"><h3>Lluvia</h3><p>Ambiente relajante…</p></div>
            <div class="card"><h3>Limpieza</h3><p>Ambiente motivador…</p></div>
        </div>
    `,

    "Organización del Hogar": `
        <div class="title">Organización del Hogar</div>

        <div class="grid">
            <div class="card"><h3>Rutinas</h3>
