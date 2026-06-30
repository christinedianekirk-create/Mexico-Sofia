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
function aiFixCode(code) {
  let fixed = code;

  // Reemplazar == por ===
  fixed = fixed.replace(/==/g, "===");

  // Agregar let si falta
  if (fixed.includes("=") && !fixed.includes("let") && !fixed.includes("const") && !fixed.includes("var")) {
    fixed = "let variable = " + fixed.split("=")[1].trim();
  }

  return fixed;
}
function aiExplainCode(code) {
  const lines = code.split("\n");
  let explanation = "📘 Explicación línea por línea:\n\n";

  lines.forEach((line, i) => {
    explanation += `Línea ${i + 1}: ${line.trim()}\n`;
  });

  return explanation;
}
function aiTextToCode(text) {
  return `
function accion() {
  console.log("${text}");
}
`;
}
function aiAutocomplete(partial) {
  if (partial.includes("for")) {
    return "for (let i = 0; i < 10; i++) {\n  console.log(i);\n}";
  }

  if (partial.includes("function")) {
    return "function nuevaFuncion() {\n  console.log('Hola desde la IA');\n}";
  }

  return "// No encontré autocompletado para eso.";
}
function aiRespond(message) {
  return "🤖 IA: " + message;
}
const generateBtn = document.createElement("button");
generateBtn.innerText = "Generar";
generateBtn.classList.add("ide-btn");
document.querySelector(".ide-actions").appendChild(generateBtn);

generateBtn.addEventListener("click", () => {
  const codeArea = document.getElementById("code-area");
  const consoleOutput = document.getElementById("console-output");

  const generated = aiGenerateFunction("Código solicitado por Christine");
  codeArea.value = generated;
  consoleOutput.innerText = "✨ Código generado automáticamente.";
});
// =======================================
// CREAR PANEL DE CHAT DENTRO DEL IDE
// =======================================

function createAIChatPanel() {
  const chatPanel = document.createElement("div");
  chatPanel.id = "ai-chat-panel";
  chatPanel.style.position = "fixed";
  chatPanel.style.right = "20px";
  chatPanel.style.bottom = "20px";
  chatPanel.style.width = "300px";
  chatPanel.style.height = "380px";
  chatPanel.style.background = "#0b1120";
  chatPanel.style.border = "1px solid #374151";
  chatPanel.style.borderRadius = "12px";
  chatPanel.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
  chatPanel.style.display = "flex";
  chatPanel.style.flexDirection = "column";
  chatPanel.style.zIndex = "9999";
  chatPanel.style.padding = "10px";
  chatPanel.style.color = "#e5e7eb";
  chatPanel.style.fontFamily = "Inter, sans-serif";

  chatPanel.innerHTML = `
    <div style="font-size:14px; margin-bottom:8px; font-weight:bold;">
      🤖 Chat IA
    </div>

    <div id="ai-chat-messages"
         style="flex:1; overflow-y:auto; padding:6px; font-size:13px;">
    </div>

    <input id="ai-chat-input"
           placeholder="Escribe aquí..."
           style="margin-top:8px; padding:8px; border-radius:8px;
                  border:1px solid #374151; background:#1a1a1a;
                  color:#e5e7eb; font-size:13px;">
  `;

  document.body.appendChild(chatPanel);
}
// =======================================
// BOTÓN PARA ABRIR EL CHAT DE IA
// =======================================

const chatBtn = document.createElement("button");
chatBtn.innerText = "Chat";
chatBtn.classList.add("ide-btn");
document.querySelector(".ide-actions").appendChild(chatBtn);

chatBtn.addEventListener("click", () => {
  if (!document.getElementById("ai-chat-panel")) {
    createAIChatPanel();
  }
});
// =======================================
// IA QUE RESPONDE EN EL CHAT
// =======================================

function aiChatResponse(message) {
  // Respuestas inteligentes
  if (message.includes("explica")) {
    return "📘 Puedo explicarte cualquier código. Solo pégalo aquí.";
  }

  if (message.includes("genera")) {
    return `
function ejemploGenerado() {
  console.log("Código generado automáticamente por la IA.");
}
`;
  }

  if (message.includes("corrige")) {
    return "🔧 Pega tu código y lo corrijo.";
  }

  if (message.includes("hola")) {
    return "Hola mi Christine 💛 ¿qué quieres crear hoy?";
  }

  return "🤖 No entendí del todo, pero puedo ayudarte. ¿Quieres generar, corregir o explicar código?";
}
// =======================================
// CONECTAR INPUT DEL CHAT
// =======================================

document.addEventListener("keydown", (e) => {
  const input = document.getElementById("ai-chat-input");
  const messages = document.getElementById("ai-chat-messages");

  if (!input) return;

  if (e.key === "Enter") {
    const userMsg = input.value.trim();
    if (!userMsg) return;

    // Mostrar mensaje del usuario
    const userBubble = document.createElement("div");
    userBubble.style.margin = "6px 0";
    userBubble.innerText = "🟡 Tú: " + userMsg;
    messages.appendChild(userBubble);

    // IA responde
    const aiMsg = aiChatResponse(userMsg);
    const aiBubble = document.createElement("div");
    aiBubble.style.margin = "6px 0";
    aiBubble.innerText = "🤖 IA: " + aiMsg;
    messages.appendChild(aiBubble);

    messages.scrollTop = messages.scrollHeight;
    input.value = "";
  }
});
function aiInsertIntoEditor(code) {
  const codeArea = document.getElementById("code-area");
  codeArea.value += "\n\n" + code;
}
function aiInsertIntoEditor(code) {
  const codeArea = document.getElementById("code-area");
  codeArea.value += "\n\n" + code;
}
function aiReplaceEditorCode(newCode) {
  const codeArea = document.getElementById("code-area");
  codeArea.value = newCode;
}
function aiAutoFix(code) {
  let fixed = code;

  fixed = fixed.replace(/==/g, "===");

  if (fixed.includes("=") && !fixed.includes("let") && !fixed.includes("const") && !fixed.includes("var")) {
    fixed = "let variable = " + fixed.split("=")[1].trim();
  }

  return fixed;
}
function aiChatEdit(message) {
  if (message.includes("corrige")) {
    const code = document.getElementById("code-area").value;
    const fixed = aiAutoFix(code);
    aiReplaceEditorCode(fixed);
    return "🔧 Código corregido automáticamente.";
  }

  if (message.includes("genera función")) {
    const generated = `
function nuevaFuncionGenerada() {
  console.log("Función generada por IA.");
}
`;
    aiInsertIntoEditor(generated);
    return "✨ Función generada y agregada al editor.";
  }

  if (message.includes("borra todo")) {
    aiReplaceEditorCode("");
    return "🧹 Editor limpiado.";
  }

  if (message.includes("escribe")) {
    const text = message.replace("escribe", "").trim();
    aiWriteToEditor(text);
    return "✏ Código escrito en el editor.";
  }

  return "🤖 Puedo corregir, generar, escribir o limpiar tu editor.";
}
// =======================================
// CONECTAR CHAT CON IA QUE EDITA EL EDITOR
// =======================================

document.addEventListener("keydown", (e) => {
  const input = document.getElementById("ai-chat-input");
  const messages = document.getElementById("ai-chat-messages");

  if (!input) return;

  if (e.key === "Enter") {
    const userMsg = input.value.trim();
    if (!userMsg) return;

    const userBubble = document.createElement("div");
    userBubble.style.margin = "6px 0";
    userBubble.innerText = "🟡 Tú: " + userMsg;
    messages.appendChild(userBubble);

    // IA responde y edita el editor
    const aiMsg = aiChatEdit(userMsg);

    const aiBubble = document.createElement("div");
    aiBubble.style.margin = "6px 0";
    aiBubble.innerText = "🤖 IA: " + aiMsg;
    messages.appendChild(aiBubble);

    messages.scrollTop = messages.scrollHeight;
    input.value = "";
  }
});
// =======================================
// AUTOCOMPLETADO EN TIEMPO REAL
// =======================================

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
function showGhostText(suggestion) {
  const ghost = document.getElementById("ghost-text");

  if (!ghost) {
    const ghostDiv = document.createElement("div");
    ghostDiv.id = "ghost-text";
    ghostDiv.style.position = "absolute";
    ghostDiv.style.pointerEvents = "none";
    ghostDiv.style.opacity = "0.3";
    ghostDiv.style.color = "#9ca3af";
    ghostDiv.style.fontFamily = "JetBrains Mono, monospace";
    ghostDiv.style.fontSize = "13px";
    ghostDiv.style.marginTop = "-20px";
    ghostDiv.style.whiteSpace = "pre";
    document.querySelector(".ide-editor").appendChild(ghostDiv);
  }

  document.getElementById("ghost-text").innerText = suggestion;
}
document.getElementById("code-area").addEventListener("input", (e) => {
  const text = e.target.value;
  const lastWord = text.split(/\s+/).pop();

  const suggestion = aiPredictCode(lastWord);

  if (suggestion) {
    showGhostText(suggestion);
  } else {
    showGhostText("");
  }
});
document.getElementById("code-area").addEventListener("keydown", (e) => {
  const ghost = document.getElementById("ghost-text");

  if (e.key === "Tab" && ghost && ghost.innerText.trim() !== "") {
    e.preventDefault();
    const codeArea = document.getElementById("code-area");
    codeArea.value += "\n" + ghost.innerText;
    ghost.innerText = "";
  }
});
