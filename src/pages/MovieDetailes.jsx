import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { API } from "../global";

export function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  async function getMovies(id) {
    const response = await fetch(`${API}/movies/` + id);
    const data = await response.json();
    setMovie(data);
  }

  useEffect(() => {
    getMovies(id);
  }, [id]);

  const navigate = useNavigate();
  return (
    <div className="movie-detail-container">
      <button onClick={() => navigate("/movies/")}>Back</button>
      <iframe
        width="100%"
        height="750"
        src={movie.trailer}
        title="AVENGERS: DOOMSDAY (2026) – FIRST TRAILER | Robert Downey Jr as Doctor Doom | Marvel Comics"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      {/* <img src={movie.poster} alt={movie.name} className="movie-poster" /> */}
      <div className="movie-detail-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>

        <p className="movie-summary">{movie.summary}</p>
      </div>
    </div>
  );
}
