import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // AGORA está dentro da função Login

  const users = {
    joamiguel: "jm123",
    johnnymichael: "jm123",
    victordaniel: "vd123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Preencha todos os campos.");
      return;
    }
    if (users[username] !== password) {
      setError("Login ou senha inválidos.");
      return;
    }
    setError("");
    navigate("/home"); // Agora navega corretamente
  };

  return (
    <div style={{ backgroundColor: "black", padding: "20px", color: "white" }}>
      <h2 style={{ color: "white" }}>Tela de Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "0 auto" }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Login"
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
