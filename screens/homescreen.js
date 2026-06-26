import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Pantalla de Inicio</h1>
      <p>Bienvenida a tu app familiar.</p>

      <button
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#ff9800",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer"
        }}
        onClick={() => navigation.navigate("Menú")}
      >
        Ir al Menú Principal
      </button>
    </div>
  );
}
