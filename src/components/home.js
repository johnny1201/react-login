import React from "react";
import "./home.css";
import AnimeCard from "../utils/animeCard"; // lembre-se: minúsculo

function Home() {
  const username = sessionStorage.getItem("username");

  const animes = [
    {
      id: 1,
      name: "Naruto Shippuden",
      image: "https://cdn.myanimelist.net/images/anime/5/17407.jpg", // capa confiável naruto shippuden
    },
    {
      id:2,
      name: "Naruto",
      image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg", //capa confiável naruto clássico
    },
    {
      id: 3,
      name: "OnePiece",
      image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg", // capa confiável One Piece
    },
    
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="username">{username ? `Bem-vindo, ${username}` : "Usuário não encontrado"}</div>
      </header>
      <main className="home-main">
        <h2>Lista de animes</h2>
        <p>O melhor lugar para quem é fã de animes!</p>

        <div className="anime-list">
          {animes.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
