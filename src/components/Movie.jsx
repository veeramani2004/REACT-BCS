import { useState } from "react";
import { useNavigate } from "react-router";
import { MovieCounter } from "./MovieCounter";

export function Movie({
  movie: { id, poster, name, summary, rating },
  deleteBtn,
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
      <div className="content-container">
        <div className="tittle">
          <p>{name}</p>
          <p style={ratingStyles}>⭐{rating}</p>
        </div>
        <p style={summaryStyle}>{summary}</p>
        <button onClick={() => setshow(!show)}>Taggle Summary</button>
        <button onClick={() => navigate("/movies/" + id)}> Trailer</button>
        <MovieCounter />
        <button onClick={() => navigate("/editmovie/" + id)}>EDIT</button>
        {deleteBtn}
      </div>

      {/* {show && <p>{summary}</p>} */}
    </div>
  );
}
