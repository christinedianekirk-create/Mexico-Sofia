document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-generar");
  const prompt = document.getElementById("prompt");
  const resultado = document.getElementById("resultado");

  btn.addEventListener("click", () => {
    const texto = prompt.value.trim();

    if (!texto) {
      resultado.innerHTML = "<p>⚠ Escribe lo que quieres crear.</p>";
      return;
    }

    // Llama al generador visual
    const htmlGenerado = generarInterfaz(texto);

    resultado.innerHTML = htmlGenerado;
  });
});
