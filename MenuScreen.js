import React from "react";

export default function MenuScreen({ navigation }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Menú Principal</h1>
      <p>Selecciona una sección:</p>

      <button
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer"
        }}
        onClick={() => navigation.navigate("Inicio")}
      >
        Ir a Inicio
      </button>
    </div>
  );
}
