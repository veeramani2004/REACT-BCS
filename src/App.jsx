import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useParams } from "react-router";
import { AddMovies } from "./AddMovies";
import { ColorGame } from "./ColorGame";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
import "./styles.css";
import { UserList } from "./UserList";

// Component = Logic + UI
export default function App() {
  // Logic Starts
  const [movieList, setMovielist] = useState(INITIAL_MOVIES);
  // Logic End
  return (
    <div className="App">
      <nav>
        <Link to="/colorgame">colorgame | </Link>
        <Link to="/userlist">userlist | </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="films" element={<Navigate to="/movies" replace />} />
        <Route path="movies" element={<AddMovies />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="userlist" element={<UserList />} />

        <Route
          path="movies/:id"
          element={<MovieDetails movies={movieList} />}
        />
      </Routes>
    </div>
  );
}
function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  async function getMovies() {
    const response = await fetch(
      "https://68959016039a1a2b288f7c62.mockapi.io/movies/" + id
    );
    const data = await response.json();
    setMovie(data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-detail-container">
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
