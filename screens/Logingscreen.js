import React, { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const entrar = () => {
    if (usuario === "admin" && password === "1234") {
      navigation.navigate("Inicio");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Iniciar Sesión</h1>

      <div style={{ marginTop: 20 }}>
        <label>Usuario:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          style={{ display: "block", marginTop: 5, padding: 8, width: "100%" }}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", marginTop: 5, padding: 8, width: "100%" }}
        />
      </div>

      <button
        style={{
          marginTop: 30,
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer"
        }}
        onClick={entrar}
      >
        Entrar
      </button>
    </div>
  );
}
