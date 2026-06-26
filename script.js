// Seleccionar elementos
const menuItems = document.querySelectorAll(".menu-item");
const main = document.querySelector(".main");

// Contenido de cada pantalla
const screens = {
    "Inicio": `
        <h1>Bienvenida a SOFÍA</h1>
        <p>Selecciona una opción del menú para comenzar.</p>
    `,
    "Tiendas Lovely Day": `
        <h1>Tiendas Lovely Day</h1>
        <p>Aquí estarán las 50 tiendas.</p>
    `,
    "Cursos y Guías": `
        <h1>Cursos y Guías</h1>
        <p>Contenido de cursos y guías.</p>
    `,
    "Recetarios": `
        <h1>Recetarios</h1>
        <p>Lista de recetarios.</p>
    `,
    "Videos Aesthetic": `
        <h1>Videos Aesthetic</h1>
        <p>Videos motivacionales y aesthetic.</p>
    `,
    "Organización del Hogar": `
        <h1>Organización del Hogar</h1>
        <p>Tips y herramientas para organizar tu hogar.</p>
    `,
    "Negocios Digitales": `
        <h1>Negocios Digitales</h1>
        <p>Ideas y herramientas para emprender.</p>
    `,
    "Motivación": `
        <h1>Motivación</h1>
        <p>Frases y contenido motivacional.</p>
    `,
    "Favoritos": `
        <h1>Favoritos</h1>
        <p>Tu lista de favoritos aparecerá aquí.</p>
    `,
    "Ajustes": `
        <h1>Ajustes</h1>
        <p>Configuración de la app.</p>
    `
};

// Evento para cambiar pantallas
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const screen = item.getAttribute("data-screen");
        main.innerHTML = screens[screen] || "<h1>Pantalla no encontrada</h1>";
    });
});
