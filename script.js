// ===============================
// BOTÓN RUN — EJECUTA CÓDIGO REAL
// ===============================

function runCode() {
  const code = document.getElementById("code-area").value;
  const consoleOutput = document.getElementById("console-output");

  try {
    const result = eval(code);
    consoleOutput.innerText = result !== undefined
      ? result
      : "✔ Código ejecutado.";
  } catch (error) {
    consoleOutput.innerText = "❌ Error: " + error.message;
  }
}

// ===============================
// BOTÓN GUARDAR — SIMULACIÓN
// ===============================

function saveFile() {
  alert("✔ Archivo guardado (simulación).");
}

// ===============================
// BOTÓN TEMA — OSCURO / CLARO
// ===============================

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// ===============================
// IA — ANALIZAR CÓDIGO
// ===============================
function finanzasAbrir(tipo) {
    const box = document.getElementById("finanzas-contenido");

    const textos = {
        gastos: "Aquí puedes registrar gastos diarios, semanales o mensuales.",
        ingresos: "Control de ingresos: trabajo, ayudas, ventas, etc.",
        metas: "Metas financieras: ahorro para casa, carro, viajes, emergencias.",
        ahorros: "Herramientas para calcular y organizar tus ahorros."
    };

    box.innerHTML = textos[tipo];
}

function aiAnalyzeCode(code) {
  let analysis = "🤖 Análisis de IA:\n\n";

  if (!code.trim()) {
    return analysis + "⚠ No escribiste nada.";
  }

  if (code.includes("function") && !code.includes("}")) {
    analysis += "⚠ Una función parece incompleta.\n";
  }

  if (!code.includes("console.log")) {
    analysis += "ℹ Tip: Usa console.log() para ver resultados.\n";
  }

  if (code.includes("=") && !code.includes("let") && !code.includes("const") && !code.includes("var")) {
    analysis += "⚠ Estás asignando valores sin declarar variables.\n";
  }

  if ((code.match(/"/g) || []).length % 2 !== 0) {
    analysis += "⚠ Hay comillas sin cerrar.\n";
  }

  if (analysis === "🤖 Análisis de IA:\n\n") {
    analysis += "✔ Tu código se ve bien.";
  }

  return analysis;
}

function showAIAnalysis() {
  const code = document.getElementById("code-area").value;
  const consoleOutput = document.getElementById("console-output");
  consoleOutput.innerText = aiAnalyzeCode(code);
}

// ===============================
// IA — GENERAR FUNCIÓN
// ===============================

function aiGenerateFunction(prompt) {
  return `
function nuevaFuncion() {
  console.log("Función generada automáticamente: ${prompt}");
}
`;
}

// ===============================
// IA — CORREGIR CÓDIGO
// ===============================

function aiAutoFix(code) {
  let fixed = code;

  fixed = fixed.replace(/==/g, "===");

  if (fixed.includes("=") && !fixed.includes("let") && !fixed.includes("const") && !fixed.includes("var")) {
    fixed = "let variable = " + fixed.split("=")[1].trim();
  }

  return fixed;
}

// ===============================
// IA — EXPLICAR CÓDIGO
// ===============================

function aiExplainCode(code) {
  const lines = code.split("\n");
  let explanation = "📘 Explicación línea por línea:\n\n";

  lines.forEach((line, i) => {
    explanation += `Línea ${i + 1}: ${line.trim()}\n`;
  });

  return explanation;
}

// ===============================
// IA — AUTOCOMPLETADO
// ===============================

function aiPredictCode(partial) {
  partial = partial.trim();

  if (partial.endsWith("for")) {
    return "for (let i = 0; i < 10; i++) {\n  console.log(i);\n}";
  }

  if (partial.endsWith("fun") || partial.includes("function")) {
    return "function nuevaFuncion() {\n  console.log('Hola desde la IA');\n}";
  }

  if (partial.endsWith("if")) {
    return "if (true) {\n  console.log('Condición verdadera');\n}";
  }

  if (partial.endsWith("con")) {
    return "console.log('Mensaje desde IA');";
  }

  return "";
}

// ===============================
// IA — SUGERENCIAS INTELIGENTES
// ===============================

function aiSmartSuggestions(code) {
  let suggestions = "💡 Sugerencias inteligentes:\n\n";

  if (code.length > 120) {
    suggestions += "🔧 Tu función es larga. Considera dividirla.\n";
  }

  const logs = (code.match(/console\.log/g) || []).length;
  if (logs > 3) {
    suggestions += "📘 Estás usando muchos console.log.\n";
  }

  if (code.includes("let") && !code.includes("console.log")) {
    suggestions += "ℹ Declaraste variables que no usas.\n";
  }

  if (code.includes("for") && !code.includes("break")) {
    suggestions += "⚠ Un ciclo for sin break puede ser infinito.\n";
  }

  if (code.includes("function") && !code.includes("return")) {
    suggestions += "ℹ Tu función no tiene return.\n";
  }

  if (code.includes("if") && !code.includes("else")) {
    suggestions += "💭 Considera agregar un else.\n";
  }

  if (suggestions === "💡 Sugerencias inteligentes:\n\n") {
    suggestions += "✔ Tu código se ve limpio.";
  }

  return suggestions;
}

// ===============================
// IA — OPTIMIZAR CÓDIGO
// ===============================

function aiOptimizeCode(code) {
  let optimized = code;

  optimized = optimized.replace(/\s+/g, " ");
  optimized = optimized.replace(/var /g, "let ");
  optimized = optimized.replace(/console\.log\((.*?)\);/g, "console.log($1)");

  return optimized.trim();
}

// ===============================
// IA — REFACTORIZAR
// ===============================

function aiRefactorCode(code) {
  let refactored = code;

  refactored = refactored.replace(/\bdata\b/g, "info");
  refactored = refactored.replace(/\bvalue\b/g, "resultado");

  return refactored;
}

// ===============================
// IA — ARQUITECTURA
// ===============================

function aiGenerateArchitecture() {
  return `
📁 /src
   📁 /models
   📁 /views
   📁 /controllers
   📁 /utils
   📁 /core

📁 /public
   - index.html
   - style.css
   - script.js
`;
}

// ===============================
// CHAT IA
// ===============================

function aiChatResponse(message) {
  if (message.includes("explica")) return "📘 Pega tu código y lo explico.";
  if (message.includes("genera")) return aiGenerateFunction("Código solicitado");
  if (message.includes("corrige")) return "🔧 Pega tu código y lo corrijo.";
  if (message.includes("hola")) return "Hola mi Christine 💛 ¿qué quieres crear hoy?";
  return "🤖 No entendí, pero puedo ayudarte.";
}

// ===============================
// CONECTAR BOTONES DEL IDE
// ===============================

function connectIDEButtons() {
  const runBtn = document.getElementById("run-btn");
  const saveBtn = document.querySelector(".ide-btn:nth-child(2)");
  const themeBtn = document.querySelector(".ide-btn:nth-child(3)");

  runBtn.addEventListener("click", runCode);
  saveBtn.addEventListener("click", saveFile);
  themeBtn.addEventListener("click", toggleTheme);
}

document.addEventListener("DOMContentLoaded", connectIDEButtons);
function openModule(name) {
    const module = document.getElementById(name);
    if (module) {
        module.classList.add("module-open");
        module.scrollIntoView({ behavior: "smooth" });
    }
}
function openModule(id) {
    document.getElementById(id).classList.add("fade");
}
function kivoSay(text) {
    const box = document.getElementById("kivo-messages");
    box.innerHTML = text;
}
function showModule(id) {
    document.querySelectorAll(".card").forEach(c => c.style.display = "none");
    document.getElementById(id).style.display = "block";
}
function abrirLegal(tipo) {
    const box = document.getElementById("legal-contenido");

    const textos = {
        curp: "Aquí puedes obtener tu CURP, imprimirla y verificar datos.",
        ine: "Información sobre trámites del INE, reposición y actualización.",
        actas: "Actas de nacimiento, matrimonio, defunción y correcciones.",
        imss: "Registro, consultas y trámites del IMSS."
    };

    box.innerHTML = textos[tipo];
}
function abrirNivel(nivel) {
    const box = document.getElementById("educacion-contenido");

    const textos = {
        kinder: `
            <h3>Kínder</h3>
            <p>Guías para inscripción, requisitos y materiales básicos.</p>
            <ul>
                <li>Lista de útiles económicos.</li>
                <li>Enlaces a programas de apoyo para primera infancia.</li>
                <li>Consejos para mamás y papás que trabajan.</li>
            </ul>
        `,
        primaria: `
            <h3>Primaria</h3>
            <p>Información de inscripción, cambios de escuela y apoyo escolar.</p>
            <ul>
                <li>Acceso a libros gratuitos de la SEP.</li>
                <li>Programas de becas para primaria.</li>
                <li>Material de refuerzo en matemáticas y lectura.</li>
            </ul>
        `,
        secundaria: `
            <h3>Secundaria</h3>
            <p>Guías para inscripción, cambios y apoyo académico.</p>
            <ul>
                <li>Libros y recursos gratuitos en línea.</li>
                <li>Programas de becas para jóvenes.</li>
                <li>Orientación vocacional básica para elegir prepa.</li>
            </ul>
        `,
        prepa: `
            <h3>Prepa</h3>
            <p>Opciones de preparatoria pública, abierta y en línea.</p>
            <ul>
                <li>Enlaces a prepas oficiales (UNAM, IPN, estatales).</li>
                <li>Programas de becas para bachillerato.</li>
                <li>Preparación para entrar a carreras profesionales.</li>
            </ul>
        `
    };

    box.innerHTML = textos[nivel];
}

function abrirEduExtra(tipo) {
    const box = document.getElementById("educacion-contenido");

    const textos = {
        becas: `
            <h3>Becas</h3>
            <p>Listado de becas y apoyos para estudiantes en México.</p>
            <ul>
                <li>Becas Benito Juárez.</li>
                <li>Programas estatales de apoyo escolar.</li>
                <li>Requisitos y pasos para solicitar becas.</li>
            </ul>
        `,
        material: `
            <h3>Material gratuito</h3>
            <p>Recursos gratuitos para estudiar desde casa.</p>
            <ul>
                <li>Libros digitales oficiales.</li>
                <li>Plataformas gratuitas de cursos básicos.</li>
                <li>Videos y guías para tareas.</li>
            </ul>
        `,
        carreras: `
            <h3>Carreras con certificación</h3>
            <p>Acceso a planes de estudio completos de las 10 mejores carreras de México.</p>
            <ul>
                <li>Administración de Empresas</li>
                <li>Programación / Desarrollo Web</li>
                <li>Contabilidad</li>
                <li>Marketing Digital</li>
                <li>Psicología</li>
                <li>Derecho</li>
                <li>Comercio Internacional / Logística</li>
                <li>Ingeniería Industrial</li>
                <li>Educación / Pedagogía</li>
                <li>Enfermería</li>
            </ul>
            <p>Cada carrera tendrá módulos completos, proyectos y certificación digital.</p>
        `
    };

    box.innerHTML = textos[tipo];
}
function abrirCarrera(carrera) {
    const box = document.getElementById("carreras-contenido");

    const carreras = {
        admin: `
            <h3>Administración de Empresas</h3>
            <p>Carrera completa con certificación digital.</p>
            <ul>
                <li>Módulo 1: Fundamentos de Administración</li>
                <li>Módulo 2: Recursos Humanos</li>
                <li>Módulo 3: Finanzas Empresariales</li>
                <li>Módulo 4: Contabilidad Básica</li>
                <li>Módulo 5: Gestión de Proyectos</li>
                <li>Módulo 6: Marketing Empresarial</li>
                <li>Módulo 7: Liderazgo y Dirección</li>
                <li>Módulo 8: Administración Estratégica</li>
                <li>Módulo 9: Operaciones y Logística</li>
                <li>Módulo 10: Proyecto Final + Certificación</li>
            </ul>
        `,

        programacion: `
            <h3>Programación / Desarrollo Web</h3>
            <p>Carrera profesional con certificación digital.</p>
            <ul>
                <li>Módulo 1: Introducción a la Programación</li>
                <li>Módulo 2: HTML5</li>
                <li>Módulo 3: CSS3</li>
                <li>Módulo 4: JavaScript</li>
                <li>Módulo 5: Git y GitHub</li>
                <li>Módulo 6: Frontend Profesional</li>
                <li>Módulo 7: Backend con Node.js</li>
                <li>Módulo 8: Bases de Datos</li>
                <li>Módulo 9: APIs y Servicios</li>
                <li>Módulo 10: Proyecto Final + Certificación</li>
            </ul>
        `,

        contabilidad: `
            <h3>Contabilidad</h3>
            <p>Carrera completa con certificación digital.</p>
            <ul>
                <li>Módulo 1: Principios Contables</li>
                <li>Módulo 2: Estados Financieros</li>
                <li>Módulo 3: Contabilidad de Costos</li>
                <li>Módulo 4: Contabilidad Fiscal</li>
                <li>Módulo 5: Nóminas</li>
                <li>Módulo 6: Auditoría</li>
                <li>Módulo 7: Finanzas Empresariales</li>
                <li>Módulo 8: SAT y Obligaciones</li>
                <li>Módulo 9: Herramientas Contables</li>
                <li>Módulo 10: Proyecto Final + Certificación</li>
            </ul>
        `
    };

    box.innerHTML = carreras[carrera];
}
function abrirCarrera2(carrera) {
    const box = document.getElementById("carreras2-contenido");

    const carreras2 = {
        marketing: `
            <h3>Marketing Digital</h3>
            <p>Carrera profesional con certificación digital.</p>
            <ul>
                <li>Módulo 1: Fundamentos del Marketing</li>
                <li>Módulo 2: Redes Sociales</li>
                <li>Módulo 3: Publicidad Digital</li>
                <li>Módulo 4: SEO y Posicionamiento</li>
                <li>Módulo 5: Email Marketing</li>
                <li>Módulo 6: Embudos de Venta</li>
                <li>Módulo 7: Análisis de Datos</li>
                <li>Módulo 8: Branding Profesional</li>
                <li>Módulo 9: Estrategias Avanzadas</li>
                <li>Módulo 10: Proyecto Final + Certificación</li>
            </ul>
        `,

        psicologia: `
            <h3>Psicología</h3>
            <p>Carrera completa con certificación digital.</p>
            <ul>
                <li>Módulo 1: Introducción a la Psicología</li>
                <li>Módulo 2: Psicología del Desarrollo</li>
                <li>Módulo 3: Psicología Clínica</li>
                <li>Módulo 4: Psicología Social</li>
                <li>Módulo 5: Psicología Educativa</li>
                <li>Módulo 6: Trastornos Psicológicos</li>
                <li>Módulo 7: Técnicas de Evaluación</li>
                <li>Módulo 8: Intervención Terapéutica</li>
                <li>Módulo 9: Ética Profesional</li>
                <li>Módulo 10: Proyecto Final + Certificación</li>
            </ul>
        `,

        derecho: `
            <h3>Derecho</h3>
            <p>Carrera profesional con certificación digital.</p>
            <ul>
                <li>Módulo 1: Introducción al Derecho</li>
                <li>Módulo 2: Derecho Civil</li>
                <li>Módulo 3: Derecho Penal</li>
                <li>Módulo 4: Derecho Laboral</li>
                <li>Módulo 5: Derecho Mercantil</li>
                <li>Módulo 6: Derecho Constitucional</li>
                <li>Módulo 7: Juicios y Procedimientos</li>
                <li>Módulo 8: Redacción Jurídica</li>
                <li>Módulo 9: Leyes en México (SAT, IMSS, INFONAVIT)</li>
                <li>Módulo 10: Proyecto Final + Certificación</li>
            </ul>
        `
    };

    box.innerHTML = carreras2[carrera];
}
function abrirCarrera3(carrera) {
    const box = document.getElementById("carreras3-contenido");

    const carreras3 = {
        comercio: `
            <h3>Comercio Internacional / Logística</h3>
            <p>Carrera profesional con certificación digital.</p>
            <ul>
                <li>Módulo 1: Introducción al Comercio Internacional</li>
                <li>Módulo 2: Importaciones y Exportaciones</li>
                <li>Módulo 3: Aduanas y Regulaciones</li>
                <li>Módulo 4: Logística y Transporte</li>
                <li>Módulo 5: Cadenas de Suministro</li>
                <li>Módulo 6: Comercio Exterior en México</li>
                <li>Módulo 7: Documentación Internacional</li>
                <li>Módulo 8: Gestión de Almacenes</li>
                <li>Módulo 9: Análisis de Mercados Globales</li>
                <li>Módulo 10: Proyecto Final + Certificación</li>
            </ul>
        `,

        industrial: `
            <h3>Ingeniería Industrial</h3>
            <p>Carrera completa con certificación digital.</p>
            <ul>
                <li>Módulo 1: Fundamentos de Ingeniería Industrial</li>
                <li>Módulo 2: Procesos de Manufactura</li>
                <li>Módulo 3: Optimización de Procesos</li>
                <li>Módulo 4: Control de Calidad</li>
                <li>Módulo 5: Seguridad Industrial</li>
                <li>Módulo 6: Lean Manufacturing</li>
                <li>Módulo 7: Gestión de Operaciones</li>
                <li>Módulo 8: Logística y Producción</li>
                <li>Módulo 9: Análisis de Datos Industriales</li>
                <li>Módulo 10: Proyecto Final + Certificación</li>
            </ul>
        `,

        educacion: `
            <h3>Educación / Pedagogía</h3>
            <p>Carrera profesional con certificación digital.</p>
            <ul>
                <li>Módulo 1: Fundamentos de Pedagogía</li>
                <li>Módulo 2: Psicología Educativa</li>
                <li>Módulo 3: Métodos de Enseñanza</li>
                <li>Módulo 4: Diseño de Material Educativo</li>
                <li>Módulo 5: Evaluación del Aprendizaje</li>
                <li>Módulo 6: Gestión Escolar</li>
                <li>Módulo 7: Inclusión y Diversidad</li>
                <li>Módulo 8: Tecnología Educativa</li>
                <li>Módulo 9: Didáctica Avanzada</li>
                <li>Módulo 10: Proyecto Final + Certificación</li>
            </ul>
        `
    };

    box.innerHTML = carreras3[carrera];
}
function abrirCarrera4(carrera) {
    const box = document.getElementById("carreras4-contenido");

    const carreras4 = {
        enfermeria: `
            <h3>Enfermería</h3>
            <p>Carrera profesional con certificación digital.</p>
            <ul>
                <li>Módulo 1: Fundamentos de Enfermería</li>
                <li>Módulo 2: Anatomía y Fisiología Humana</li>
                <li>Módulo 3: Farmacología Básica</li>
                <li>Módulo 4: Técnicas de Atención Clínica</li>
                <li>Módulo 5: Urgencias Médicas</li>
                <li>Módulo 6: Enfermería Comunitaria</li>
                <li>Módulo 7: Cuidados del Paciente</li>
                <li>Módulo 8: Enfermería Pediátrica</li>
                <li>Módulo 9: Enfermería Geriátrica</li>
                <li>Módulo 10: Ética y Legislación en Salud</li>
                <li>Módulo 11: Procedimientos Hospitalarios</li>
                <li>Módulo 12: Proyecto Final + Certificación</li>
            </ul>
        `
    };

    box.innerHTML = carreras4[carrera];
}
#paquete-grande-contenido {
    margin-top: 20px;
    padding: 20px;
    background: #242424;
    border-radius: 12px;
    color: white;
}
function abrirModulo(modulo) {
    const box = document.getElementById("paquete-grande-contenido");

    const modulos = {
        certificaciones: `
            <h3>Certificaciones Profesionales</h3>
            <p>Certificaciones gratuitas y de bajo costo para México.</p>
            <ul>
                <li>Google Career Certificates</li>
                <li>Microsoft Learn Certificaciones</li>
                <li>Coursera – Becas para México</li>
                <li>Certificación en Marketing Digital</li>
                <li>Certificación en Programación Web</li>
                <li>Certificación en Ciberseguridad</li>
                <li>Certificación en Administración</li>
                <li>Certificación en Contabilidad</li>
                <li>Certificación en Logística</li>
                <li>Certificación en Enfermería Básica</li>
            </ul>
        `,

        empleos: `
            <h3>Empleos en México</h3>
            <p>Plataformas confiables para encontrar trabajo.</p>
            <ul>
                <li>Computrabajo</li>
                <li>OCC Mundial</li>
                <li>LinkedIn Empleos</li>
                <li>Indeed México</li>
                <li>Bolsas de trabajo del Gobierno</li>
                <li>Empleos para jóvenes</li>
                <li>Empleos sin experiencia</li>
                <li>Empleos remotos</li>
                <li>Empleos por carrera</li>
                <li>Empleos por estado</li>
            </ul>
        `,

        salarios: `
            <h3>Salarios en México</h3>
            <p>Promedios reales por carrera.</p>
            <ul>
                <li>Administración — $10,000 a $18,000</li>
                <li>Programación — $18,000 a $45,000</li>
                <li>Contabilidad — $12,000 a $22,000</li>
                <li>Marketing — $10,000 a $25,000</li>
                <li>Psicología — $9,000 a $18,000</li>
                <li>Derecho — $12,000 a $30,000</li>
                <li>Comercio Internacional — $14,000 a $28,000</li>
                <li>Ingeniería Industrial — $15,000 a $32,000</li>
                <li>Educación — $8,000 a $15,000</li>
                <li>Enfermería — $10,000 a $20,000</li>
            </ul>
        `,

        universidades: `
            <h3>Universidades Gratuitas en México</h3>
            <p>Opciones reales sin costo o con becas completas.</p>
            <ul>
                <li>UNAM — Universidad Nacional Autónoma de México</li>
                <li>IPN — Instituto Politécnico Nacional</li>
                <li>UAM — Universidad Autónoma Metropolitana</li>
                <li>Universidad de la Salud CDMX</li>
                <li>Universidad Rosario Castellanos</li>
                <li>Universidad Benito Juárez</li>
                <li>Universidades del Bienestar</li>
                <li>Becas Jóvenes Construyendo el Futuro</li>
                <li>Becas para carreras técnicas</li>
                <li>Becas estatales por estado</li>
            </ul>
        `
    };

    box.innerHTML = modulos[modulo];
}
