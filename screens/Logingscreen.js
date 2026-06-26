import React from "react";

export default function LoginScreen({ navigation }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Iniciar Sesión</h1>
      <p>Bienvenida. Aquí podrás entrar a tu cuenta familiar.</p>

      <button
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer"
        }}
        onClick={() => navigation.navigate("Inicio")}
      >
        Entrar
      </button>
    </div>
  );
}
