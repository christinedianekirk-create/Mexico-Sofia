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

