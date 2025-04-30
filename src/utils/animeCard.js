// utils/animecard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./animeCard.css"; // crie esse CSS se quiser estilizar

function AnimeCard({ id, name, image }) {
  const navigate = useNavigate();

  return (
    <div className="anime-card" onClick={() => navigate(`/anime/${id}`)}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default AnimeCard;
