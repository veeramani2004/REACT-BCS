import { useState } from "react";
import { MovieCounter } from "./MovieCounter";
import { useNavigate } from "react-router";

export function MovieDetailes({
  movie: { poster, name, summary, rating },
  id,
}) {
  const [show, setshow] = useState(true);
  const ratingStyles = {
    color: rating >= 8 ? "green" : "red",
  };

  const summaryStyle = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();
  return (
    <div className="movie">
      <img src={poster} alt={`${name}'s poster`} />
      <div className="tittle">
        <h1>{name}</h1>
        <h1 style={ratingStyles}>⭐{rating}</h1>
      </div>
      <button onClick={() => setshow(!show)}>Taggle Summary</button>
      <button onClick={() => navigate("/movies/" + id)}> Trailer</button>

      {/* {show && <p>{summary}</p>} */}
      <p style={summaryStyle}>{summary}</p>

      <MovieCounter />
    </div>
  );
}
