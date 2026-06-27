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
function mostrarManualidades(seccion) {
    const contenido = {
        ninos: `
            <h3>Manualidades para Niños</h3>
            <ul>
                <li>Figuras con palitos de madera</li>
                <li>Pintura con esponjas</li>
                <li>Máscaras de animales</li>
                <li>Tarjetas para mamá y papá</li>
                <li>Juguetes con cartón</li>
            </ul>
        `,
        hogar: `
            <h3>Manualidades para el Hogar</h3>
            <ul>
                <li>Portavelas decorativos</li>
                <li>Cuadros minimalistas</li>
                <li>Macetas pintadas a mano</li>
                <li>Organizadores económicos</li>
                <li>Decoración con listones</li>
            </ul>
        `,
        reciclaje: `
            <h3>Reciclaje Creativo</h3>
            <ul>
                <li>Macetas con botellas</li>
                <li>Flores con cucharas</li>
                <li>Organizadores con latas</li>
                <li>Porta lápices con tubos</li>
                <li>Decoración con cartón</li>
            </ul>
        `,
        venta: `
            <h3>Manualidades para Vender</h3>
            <ul>
                <li>Velas aromáticas</li>
                <li>Llaveros personalizados</li>
                <li>Pulseras y collares</li>
                <li>Arreglos florales</li>
                <li>Decoración para fiestas</li>
            </ul>
        `,
        fiestas: `
            <h3>Decoración para Fiestas</h3>
            <ul>
                <li>Centros de mesa</li>
                <li>Banderines y letreros</li>
                <li>Globos decorados</li>
                <li>Piñatas pequeñas</li>
                <li>Recuerditos económicos</li>
            </ul>
        `
    };

    document.getElementById("contenido-manualidades").innerHTML = contenido[seccion];
}
function mostrarCostura(seccion) {
    const contenido = {
        basico: `
            <h3>Costura Básica</h3>
            <ul>
                <li>Cómo enhebrar una aguja</li>
                <li>Puntada recta</li>
                <li>Puntada invisible</li>
                <li>Cómo rematar correctamente</li>
                <li>Tipos de telas y para qué sirven</li>
            </ul>
        `,
        maquina: `
            <h3>Manejo de Máquina de Coser</h3>
            <ul>
                <li>Cómo enhebrar la máquina</li>
                <li>Cómo ajustar tensión</li>
                <li>Cómo cambiar la aguja</li>
                <li>Cómo hacer puntada recta y zigzag</li>
                <li>Mantenimiento básico</li>
            </ul>
        `,
        prendas: `
            <h3>Prendas</h3>
            <ul>
                <li>Faldas sencillas</li>
                <li>Blusas básicas</li>
                <li>Pantalones ligeros</li>
                <li>Shorts para niños</li>
                <li>Mandiles y batas</li>
            </ul>
        `,
        arreglos: `
            <h3>Arreglos</h3>
            <ul>
                <li>Subir bastilla</li>
                <li>Ajustar cintura</li>
                <li>Arreglar cierres</li>
                <li>Reparar rasgaduras</li>
                <li>Ajustes de uniformes</li>
            </ul>
        `,
        negocio: `
            <h3>Negocio de Costura</h3>
            <ul>
                <li>Cómo cobrar por trabajo</li>
                <li>Cómo calcular costos</li>
                <li>Cómo conseguir clientes</li>
                <li>Ideas de productos para vender</li>
                <li>Cómo entregar trabajos profesionales</li>
            </ul>
        `
    };

    document.getElementById("contenido-costura").innerHTML = contenido[seccion];
}
function mostrarTramites(seccion) {
    const contenido = {
        curp: `
            <h3>CURP</h3>
            <ul>
                <li>Cómo consultar tu CURP</li>
                <li>Cómo imprimirla gratis</li>
                <li>Qué hacer si aparece incorrecta</li>
                <li>CURP para niños</li>
                <li>CURP para adultos mayores</li>
            </ul>
        `,
        actas: `
            <h3>Actas</h3>
            <ul>
                <li>Acta de nacimiento</li>
                <li>Acta de matrimonio</li>
                <li>Acta de defunción</li>
                <li>Cómo descargarlas en línea</li>
                <li>Errores comunes y cómo corregirlos</li>
            </ul>
        `,
        ine: `
            <h3>INE</h3>
            <ul>
                <li>Cómo sacar tu INE por primera vez</li>
                <li>Reposición por robo o extravío</li>
                <li>Cambio de domicilio</li>
                <li>Requisitos para cada trámite</li>
                <li>Cómo agendar cita</li>
            </ul>
        `,
        imss: `
            <h3>IMSS</h3>
            <ul>
                <li>Cómo sacar número de seguro social</li>
                <li>Cómo imprimir comprobante</li>
                <li>Cómo registrarte en clínica</li>
                <li>Cómo cambiar de clínica</li>
                <li>Cómo consultar semanas cotizadas</li>
            </ul>
        `,
        citas: `
            <h3>Citas en Línea</h3>
            <ul>
                <li>Citas para INE</li>
                <li>Citas para actas</li>
                <li>Citas para pasaporte</li>
                <li>Citas para IMSS</li>
                <li>Cómo evitar errores al agendar</li>
            </ul>
        `
    };

    document.getElementById("contenido-tramites").innerHTML = contenido[seccion];
}
