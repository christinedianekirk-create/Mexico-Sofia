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

// Función para maestros — Inglés
function mostrarIngles(nivel) {
    const contenido = {
        kinder: `
            <h3>Kínder</h3>
            <ul>
                <li>Colores en inglés</li>
                <li>Animales</li>
                <li>Números básicos</li>
            </ul>
        `,
        primaria: `
            <h3>Primaria</h3>
            <ul>
                <li>Saludos</li>
                <li>Verbos básicos</li>
                <li>Frases simples</li>
            </ul>
        `,
        secundaria: `
            <h3>Secundaria</h3>
            <ul>
                <li>Gramática</li>
                <li>Oraciones compuestas</li>
                <li>Lecturas cortas</li>
            </ul>
        `,
        prepa: `
            <h3>Preparatoria</h3>
            <ul>
                <li>Ensayos</li>
                <li>Comprensión avanzada</li>
                <li>Conversación</li>
            </ul>
        `
    };

    document.getElementById("contenido-nivel").innerHTML =
        contenido[nivel] || "<p>Nivel no encontrado.</p>";
}
