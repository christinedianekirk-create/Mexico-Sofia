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
function mostrarFinanzas(seccion) {
    const contenido = {
        ahorro: `
            <h3>Ahorro</h3>
            <ul>
                <li>Cómo ahorrar con ingresos bajos</li>
                <li>Regla 50/30/20 adaptada a México</li>
                <li>Reto de ahorro semanal</li>
                <li>Reto de ahorro de monedas</li>
                <li>Cómo crear un fondo de emergencia</li>
            </ul>
        `,
        deudas: `
            <h3>Deudas</h3>
            <ul>
                <li>Método bola de nieve</li>
                <li>Método avalancha</li>
                <li>Cómo negociar deudas</li>
                <li>Errores que causan más deudas</li>
                <li>Cómo dejar de pedir prestado</li>
            </ul>
        `,
        gastos: `
            <h3>Gastos</h3>
            <ul>
                <li>Cómo controlar gastos diarios</li>
                <li>Lista de gastos hormiga</li>
                <li>Cómo hacer un presupuesto simple</li>
                <li>Gastos necesarios vs innecesarios</li>
                <li>Plantilla de presupuesto familiar</li>
            </ul>
        `,
        ingresos: `
            <h3>Ingresos</h3>
            <ul>
                <li>Ideas de ingresos extra en México</li>
                <li>Negocios pequeños desde casa</li>
                <li>Cómo vender sin invertir</li>
                <li>Cómo usar habilidades para ganar dinero</li>
                <li>Ingresos digitales simples</li>
            </ul>
        `,
        metas: `
            <h3>Metas</h3>
            <ul>
                <li>Cómo crear metas financieras reales</li>
                <li>Metas a corto, mediano y largo plazo</li>
                <li>Cómo medir tu progreso</li>
                <li>Errores que frenan tus metas</li>
                <li>Plan familiar de 12 meses</li>
            </ul>
        `
    };

    document.getElementById("contenido-finanzas").innerHTML = contenido[seccion];
}
function mostrarSalud(seccion) {
    const contenido = {
        primeros: `
            <h3>Primeros Auxilios</h3>
            <ul>
                <li>Qué hacer en caso de fiebre</li>
                <li>Cómo detener una hemorragia</li>
                <li>Qué hacer en caso de desmayo</li>
                <li>Cómo actuar ante una quemadura</li>
                <li>Botiquín básico familiar</li>
            </ul>
        `,
        sintomas: `
            <h3>Síntomas Comunes</h3>
            <ul>
                <li>Dolor de cabeza</li>
                <li>Dolor de estómago</li>
                <li>Tos y gripe</li>
                <li>Vómito y diarrea</li>
                <li>Cuándo ir al doctor</li>
            </ul>
        `,
        ninos: `
            <h3>Niños</h3>
            <ul>
                <li>Fiebre en niños</li>
                <li>Golpes y caídas</li>
                <li>Deshidratación</li>
                <li>Vacunas importantes</li>
                <li>Señales de alerta</li>
            </ul>
        `,
        adultos: `
            <h3>Adultos</h3>
            <ul>
                <li>Presión alta</li>
                <li>Diabetes</li>
                <li>Dolor de pecho</li>
                <li>Problemas respiratorios</li>
                <li>Cuidados preventivos</li>
            </ul>
        `,
        emergencias: `
            <h3>Emergencias</h3>
            <ul>
                <li>Números de emergencia en México</li>
                <li>Qué hacer en un accidente</li>
                <li>Cómo actuar ante un incendio</li>
                <li>Cómo ayudar a un adulto mayor</li>
                <li>Plan familiar de emergencia</li>
            </ul>
        `
    };

    document.getElementById("contenido-salud").innerHTML = contenido[seccion];
}
