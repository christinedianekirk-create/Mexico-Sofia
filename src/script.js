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
    <p>Selecciona una tienda para ver su información.</p>

    <div class="tiendas-lista">

        <h2>Tiendas Digitales</h2>
        <ul>
            <li>Lovely Day Digital Shop</li>
            <li>Lovely Day PLR Store</li>
            <li>Lovely Day MRR Store</li>
            <li>Lovely Day E-books Store</li>
            <li>Lovely Day Business Kits</li>
            <li>Lovely Day Canva Templates</li>
            <li>Lovely Day Social Media Packs</li>
            <li>Lovely Day Printable Bundles</li>
            <li>Lovely Day Digital Courses</li>
            <li>Lovely Day Membership Club</li>
        </ul>

        <h2>Print-On-Demand</h2>
        <ul>
            <li>Lovely Day POD Shirts</li>
            <li>Lovely Day POD Hoodies</li>
            <li>Lovely Day POD Mugs</li>
            <li>Lovely Day POD Tote Bags</li>
            <li>Lovely Day POD Phone Cases</li>
            <li>Lovely Day POD Stickers</li>
            <li>Lovely Day POD Journals</li>
            <li>Lovely Day POD Wall Art</li>
            <li>Lovely Day POD Kids Collection</li>
            <li>Lovely Day POD Couples Collection</li>
        </ul>

        <h2>Comida</h2>
        <ul>
            <li>Lovely Day Bolis & Helados</li>
            <li>Lovely Day Paletas</li>
            <li>Lovely Day Postres Caseros</li>
            <li>Lovely Day Panadería Casera</li>
            <li>Lovely Day Antojitos Mexicanos</li>
            <li>Lovely Day Salsas y Aderezos</li>
            <li>Lovely Day Comidas para Llevar</li>
            <li>Lovely Day Snacks Saludables</li>
            <li>Lovely Day Bebidas Naturales</li>
            <li>Lovely Day Cocina Económica</li>
        </ul>

        <h2>Familia en México</h2>
        <ul>
            <li>Lovely Day Manualidades</li>
            <li>Lovely Day Costura y Arreglos</li>
            <li>Lovely Day Limpieza y Hogar</li>
            <li>Lovely Day Jardinería</li>
            <li>Lovely Day Reparaciones Básicas</li>
            <li>Lovely Day Ropa de Bebé</li>
            <li>Lovely Day Ropa de Mujer</li>
            <li>Lovely Day Ropa de Hombre</li>
            <li>Lovely Day Zapatería</li>
            <li>Lovely Day Papelería Familiar</li>
        </ul>

        <h2>Servicios</h2>
        <ul>
            <li>Lovely Day Servicios de Oficina</li>
            <li>Lovely Day Servicios de Limpieza</li>
            <li>Lovely Day Servicios de Cocina</li>
            <li>Lovely Day Servicios de Cuidado de Niños</li>
            <li>Lovely Day Servicios de Cuidado de Adultos</li>
            <li>Lovely Day Servicios de Mensajería</li>
            <li>Lovely Day Servicios de Fotografía</li>
            <li>Lovely Day Servicios de Video</li>
            <li>Lovely Day Servicios de Diseño</li>
            <li>Lovely Day Servicios de Reparación de Celulares</li>
        </ul>

    </div>
`,

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
