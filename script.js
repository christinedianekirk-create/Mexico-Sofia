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
