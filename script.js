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
