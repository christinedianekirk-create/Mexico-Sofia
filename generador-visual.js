function generarInterfaz(prompt) {
  prompt = prompt.toLowerCase();

  // Ejemplo: si el usuario pide una tienda
  if (prompt.includes("tienda")) {
    return `
      <h3>🛒 Interfaz generada: Tienda</h3>
      <div class="tienda-demo">
        <p>Esta es una tienda generada automáticamente según tu descripción.</p>
        <button>Categorías</button>
        <button>Productos</button>
        <button>Carrito</button>
      </div>
    `;
  }

  // Ejemplo: si pide un dashboard
  if (prompt.includes("dashboard")) {
    return `
      <h3>📊 Dashboard generado</h3>
      <div class="dashboard-demo">
        <p>Panel generado automáticamente.</p>
        <div class="card">Usuarios</div>
        <div class="card">Ventas</div>
        <div class="card">Reportes</div>
      </div>
    `;
  }

  // Respuesta genérica
  return `
    <h3>✨ Interfaz generada</h3>
    <p>SOFÍA creó una estructura basada en tu descripción:</p>
    <pre>${prompt}</pre>
  `;
}
