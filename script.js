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
function mostrarIngles(nivel) {
    const contenido = {
        kinder: `
            <h3>Kínder</h3>
            <ul>
                <li>Colores en inglés</li>
                <li>Animales</li>
                <li>Números del 1 al 20</li>
                <li>Saludos básicos</li>
                <li>Canciones cortas</li>
                <li>Videos para repetir palabras</li>
            </ul>
        `,
        primaria: `
            <h3>Primaria</h3>
            <ul>
                <li>Vocabulario básico</li>
                <li>Frases comunes</li>
                <li>Lecturas cortas</li>
                <li>Ejercicios de listening</li>
                <li>Videos con pronunciación</li>
                <li>Tareas imprimibles</li>
            </ul>
        `,
        secundaria: `
            <h3>Secundaria</h3>
            <ul>
                <li>Gramática básica</li>
                <li>Conversaciones reales</li>
                <li>Lecturas más largas</li>
                <li>Listening intermedio</li>
                <li>Pronunciación guiada</li>
                <li>Ejercicios de escritura</li>
            </ul>
        `,
        prepa: `
            <h3>Preparatoria</h3>
            <ul>
                <li>Gramática intermedia</li>
                <li>Conversación fluida</li>
                <li>Lecturas avanzadas</li>
                <li>Comprensión auditiva avanzada</li>
                <li>Redacción formal</li>
                <li>Preparación para entrevistas</li>
            </ul>
        `,
        adultos: `
            <h3>Adultos</h3>
            <ul>
                <li>Inglés para el trabajo</li>
                <li>Inglés para trámites</li>
                <li>Inglés para viajar</li>
                <li>Inglés para negocios</li>
                <li>Conversación práctica</li>
                <li>Videos paso a paso</li>
            </ul>
        `
    };

    document.getElementById("contenido-ingles").innerHTML = contenido[nivel];
}
