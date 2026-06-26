/* ============================================
   SOFÍA — Navegación estilo Slack (Bloque 1)
   ============================================ */

// Seleccionar elementos
const menuItems = document.querySelectorAll(".menu-item");
const main = document.querySelector(".main");

// OBJETO PRINCIPAL DE PANTALLAS
const screens = {

    // ⭐ PANTALLA INICIO
    "Inicio": `
        <div class="title">Bienvenida a SOFÍA</div>

        <div class="card">
            <h3>✨ Tu Web App estilo Slack</h3>
            <p>Sidebar oscuro, tarjetas redondeadas, colores Slack, diseño profesional.</p>
        </div>

        <div class="card">
            <h3>🛍️ 50 Tiendas Lovely Day</h3>
            <p>Listas para integrarse en las siguientes pantallas.</p>
        </div>

        <div class="card">
            <h3>📚 Cursos y Guías</h3>
            <p>Todo organizado para tu familia en México.</p>
        </div>

        <div class="card">
            <h3>🎧 Videos Aesthetic</h3>
            <p>Ambientes de café, lluvia, limpieza, naturaleza y más.</p>
        </div>
    `,
