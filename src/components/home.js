import React from "react";

function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('https://link-para-imagem-de-naruto.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1>Bem-vindo!</h1>
    </div>
  );
}

export default Home;
