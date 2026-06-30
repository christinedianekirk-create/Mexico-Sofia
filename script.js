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
