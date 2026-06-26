// =============================================
//  SCRIPT PRINCIPAL DE SOFÍA
//  PARTE 1 — CONFIGURACIÓN INICIAL
// =============================================

// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    console.log("SOFÍA está lista.");

    // Inicializar módulos cuando existan
    inicializarMenu();
    inicializarBotones();
});

// =============================================
//  MENÚ PRINCIPAL
// =============================================
function inicializarMenu() {
    const botones = document.querySelectorAll(".menu-btn");

    if (!botones) return;

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const destino = boton.getAttribute("data-section");
            mostrarSeccion(destino);
        });
    });
}

function mostrarSeccion(id) {
    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(sec => sec.style.display = "none");

    const destino = document.getElementById(id);
    if (destino) destino.style.display = "block";
}

// =============================================
//  BOTONES GENERALES
// =============================================
function inicializarBotones() {
    const botones = document.querySelectorAll(".btn");

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Botón presionado:", btn.innerText);
        });
    });
}
// =============================================
//  PARTE 2 — MÓDULOS DE SOFÍA
// =============================================

// =============================================
//  MÓDULO: FINANZAS
// =============================================
function cargarFinanzas() {
    const contenedor = document.getElementById("finanzas-contenido");
    if (!contenedor) return;

    contenedor.innerHTML = `
        <h2>Finanzas Familiares</h2>
        <p>Herramientas simples para organizar gastos, ingresos y metas.</p>

        <button class="btn">Registrar gasto</button>
        <button class="btn">Registrar ingreso</button>
        <button class="btn">Ver historial</button>
    `;
}

// =============================================
//  MÓDULO: SALUD
// =============================================
function cargarSalud() {
    const contenedor = document.getElementById("salud-contenido");
    if (!contenedor) return;

    contenedor.innerHTML = `
        <h2>Salud Familiar</h2>
        <p>Información básica, primeros auxilios y cuidados esenciales.</p>

        <button class="btn">Pediatría básica</button>
        <button class="btn">Primeros auxilios</button>
        <button class="btn">Medicinas comunes</button>
    `;
}

// =============================================
//  MÓDULO: EDUCACIÓN
// =============================================
function cargarEducacion() {
    const contenedor = document.getElementById("educacion-contenido");
    if (!contenedor) return;

    contenedor.innerHTML = `
        <h2>Educación</h2>
        <p>Cursos, guías y herramientas para aprender desde casa.</p>

        <button class="btn">Inglés básico</button>
        <button class="btn">Cursos gratuitos</button>
        <button class="btn">Tareas y apoyo</button>
    `;
}

// =============================================
//  MÓDULO: MOTIVACIÓN
// =============================================
function cargarMotivacion() {
    const contenedor = document.getElementById("motivacion-contenido");
    if (!contenedor) return;

    contenedor.innerHTML = `
        <h2>Motivación</h2>
        <p>Frases, audios y mensajes para levantar el ánimo.</p>

        <button class="btn">Frase del día</button>
        <button class="btn">Audio motivacional</button>
        <button class="btn">Reflexiones</button>
    `;
}

// =============================================
//  MÓDULO: RECETAS
// =============================================
function cargarRecetas() {
    const contenedor = document.getElementById("recetas-contenido");
    if (!contenedor) return;

    contenedor.innerHTML = `
        <h2>Recetas</h2>
        <p>Comida casera, fácil y económica.</p>

        <button class="btn">Comida mexicana</button>
        <button class="btn">Postres</button>
        <button class="btn">Bebidas</button>
    `;
}

// =============================================
//  MÓDULO: HERRAMIENTAS
// =============================================
function cargarHerramientas() {
    const contenedor = document.getElementById("herramientas-contenido");
    if (!contenedor) return;

    contenedor.innerHTML = `
        <h2>Herramientas</h2>
        <p>Utilidades rápidas para la familia.</p>

        <button class="btn">Calculadora</button>
        <button class="btn">Notas rápidas</button>
        <button class="btn">Recordatorios</button>
    `;
}

// =============================================
//  MÓDULO: AYUDA
// =============================================
function cargarAyuda() {
    const contenedor = document.getElementById("ayuda-contenido");
    if (!contenedor) return;

    contenedor.innerHTML = `
        <h2>Ayuda</h2>
        <p>Guías simples para trámites y documentos.</p>

        <button class="btn">Documentos</button>
        <button class="btn">Preguntas frecuentes</button>
        <button class="btn">Contactar apoyo</button>
    `;
}

// =============================================
//  MÓDULO: POSTRES
// =============================================
function cargarPostres() {
    const contenedor = document.getElementById("postres-contenido");
    if (!contenedor) return;

    contenedor.innerHTML = `
        <h2>Postres</h2>
        <p>Recetas dulces fáciles y económicas.</p>

        <button class="btn">Gelatinas</button>
        <button class="btn">Bolis</button>
        <button class="btn">Pasteles</button>
    `;
}

// =============================================
//  MÓDULO ESPECIAL: JULISA
// =============================================
function cargarJulisa() {
    const contenedor = document.getElementById("julisa-contenido");
    if (!contenedor) return;

    contenedor.innerHTML = `
        <h2>Módulo Especial: Tía Julisa</h2>
        <p>Costura, salud, motivación y herramientas para su trabajo.</p>

        <button class="btn">Costura profesional</button>
        <button class="btn">Salud para costureras</button>
        <button class="btn">Ideas de negocio</button>
        <button class="btn">Frase especial</button>
    `;
}
