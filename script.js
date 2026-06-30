// ===============================
// BOTÓN RUN — EJECUTA CÓDIGO REAL
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const runBtn = document.getElementById("run-btn");
  const codeArea = document.getElementById("code-area");
  const consoleOutput = document.getElementById("console-output");

  runBtn.addEventListener("click", () => {
    const code = codeArea.value;

    try {
      const result = eval(code);
      consoleOutput.innerText = result !== undefined
        ? result
        : "✔ Código ejecutado sin errores.";
    } catch (error) {
      consoleOutput.innerText = "❌ Error: " + error.message;
    }
  });
});

// ===============================
// BOTÓN GUARDAR — SIMULACIÓN
// ===============================

const saveButtons = document.querySelectorAll(".ide-btn");

saveButtons.forEach(btn => {
  if (btn.innerText === "Guardar") {
    btn.addEventListener("click", () => {
      alert("✔ Archivo guardado (simulación).");
    });
  }
});

// ===============================
// BOTÓN TEMA — OSCURO / CLARO
// ===============================

const themeBtn = document.querySelector(".ide-btn:nth-child(3)");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.innerText = "Tema oscuro";
  } else {
    themeBtn.innerText = "Tema claro";
  }
});
// ===============================
// BOTÓN GUARDAR — SIMULACIÓN
// ===============================

const saveButtons = document.querySelectorAll(".ide-btn");

saveButtons.forEach(btn => {
  if (btn.innerText === "Guardar") {
    btn.addEventListener("click", () => {
      alert("✔ Archivo guardado (simulación).");
    });
  }
});

// ===============================
// BOTÓN TEMA — OSCURO / CLARO
// ===============================

const themeBtn = document.querySelector(".ide-btn:nth-child(3)");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.innerText = "Tema oscuro";
  } else {
    themeBtn.innerText = "Tema claro";
  }
});

// ===============================
// BASE PARA IA — LISTA PARA CONECTAR
// ===============================

function aiAnalyzeCode(code) {
  // Aquí después conectamos tu IA
  return "🤖 IA lista para activarse...";
}
// ===============================
// BOTÓN GUARDAR — SIMULACIÓN
// ===============================

const saveButtons = document.querySelectorAll(".ide-btn");

saveButtons.forEach(btn => {
  if (btn.innerText === "Guardar") {
    btn.addEventListener("click", () => {
      alert("✔ Archivo guardado (simulación).");
    });
  }
});

// ===============================
// BOTÓN TEMA — OSCURO / CLARO
// ===============================

const themeBtn = document.querySelector(".ide-btn:nth-child(3)");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.innerText = "Tema oscuro";
  } else {
    themeBtn.innerText = "Tema claro";
  }
});

// ===============================
// BASE PARA IA — LISTA PARA CONECTAR
// ===============================

function aiAnalyzeCode(code) {
  return "🤖 IA lista para activarse...";
}
// =======================================
// IA REAL — ANALIZA EL CÓDIGO DEL EDITOR
// =======================================

function aiAnalyzeCode(code) {
  let analysis = "🤖 Análisis de IA:\n\n";

  // Detectar si el código está vacío
  if (!code.trim()) {
    return analysis + "⚠ No escribiste nada. Intenta poner código.";
  }

  // Detectar funciones sin cerrar
  if (code.includes("function") && !code.includes("}")) {
    analysis += "⚠ Parece que una función no está cerrada correctamente.\n";
  }

  // Detectar console.log
  if (!code.includes("console.log")) {
    analysis += "ℹ Tip: Puedes usar console.log() para ver resultados.\n";
  }

  // Detectar variables sin declarar
  if (code.includes("=") && !code.includes("let") && !code.includes("const") && !code.includes("var")) {
    analysis += "⚠ Estás asignando valores sin declarar variables.\n";
  }

  // Detectar errores comunes
  if (code.includes("==")) {
    analysis += "ℹ Tip: Usa === para comparaciones estrictas.\n";
  }

  // Detectar loops sin cierre
  if (code.includes("for") && !code.includes("}")) {
    analysis += "⚠ Un ciclo for parece incompleto.\n";
  }

  // Detectar strings sin cerrar
  if ((code.match(/"/g) || []).length % 2 !== 0) {
    analysis += "⚠ Hay comillas sin cerrar.\n";
  }

  // Si no detectó nada malo
  if (analysis === "🤖 Análisis de IA:\n\n") {
    analysis += "✔ Tu código se ve bien. ¡Buen trabajo!";
  }

  return analysis;
}
// =======================================
// BOTÓN IA — ANALIZAR CÓDIGO
// =======================================

const aiButton = document.createElement("button");
aiButton.innerText = "IA";
aiButton.classList.add("ide-btn");
document.querySelector(".ide-actions").appendChild(aiButton);

aiButton.addEventListener("click", () => {
  const code = document.getElementById("code-area").value;
  const consoleOutput = document.getElementById("console-output");
  const analysis = aiAnalyzeCode(code);
  consoleOutput.innerText = analysis;
});
function saveFile() {
  alert("✔ Archivo guardado (simulación).");
}
function toggleTheme() {
  document.body.classList.toggle("light-mode");
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
function runCode() {
  const code = document.getElementById("code-area").value;
  const consoleOutput = document.getElementById("console-output");

  try {
    const result = eval(code);
    consoleOutput.innerText = result !== undefined ? result : "✔ Código ejecutado.";
  } catch (error) {
    consoleOutput.innerText = "❌ Error: " + error.message;
  }
}
function connectIDEButtons() {
  const runBtn = document.getElementById("run-btn");
  const saveBtn = document.querySelector(".ide-btn:nth-child(2)");
  const themeBtn = document.querySelector(".ide-btn:nth-child(3)");

  // Botón RUN
  runBtn.addEventListener("click", runCode);

  // Botón Guardar
  saveBtn.addEventListener("click", saveFile);

  // Botón Tema
  themeBtn.addEventListener("click", toggleTheme);

  // Botón IA
  const aiBtn = document.createElement("button");
  aiBtn.innerText = "IA";
  aiBtn.classList.add("ide-btn");
  document.querySelector(".ide-actions").appendChild(aiBtn);

  aiBtn.addEventListener("click", showAIAnalysis);
}

document.addEventListener("DOMContentLoaded", connectIDEButtons);
function aiGenerateFunction(prompt) {
  return `
function nuevaFuncion() {
  // Generado por IA
  console.log("Función generada automáticamente: ${prompt}");
}
`;
}
