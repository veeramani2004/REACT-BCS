import { AddMovies } from "./AddMovies";
import { ColorGame } from "./ColorGame";
import { Counter } from "./Counter";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
import { MovieData } from "./MovieData.1";
import { MovieDetailes } from "./MovieDetailes";
import { MsgList } from "./MsgList";
import "./styles.css";
import { UserList } from "./UserList";
import { useActionState, useState } from "react";
import { Route, Routes, Link, Navigate, useParams } from "react-router";

// Component = Logic + UI
export default function App() {
  // Logic Starts
  const [movieList, setMovielist] = useState(INITIAL_MOVIES);
  // Logic End
  return (
    <div className="App">
      <nav>
        <Link to="/moviedata"> Movies | </Link>
        <Link to="/colorgame">colorgame | </Link>
        <Link to="/userlist">userlist | </Link>
        <Link to="/movielist">Added-Movies</Link>
      </nav>
      <Routes>
        <Route path="films" element={<Navigate to="/movielist" replace />} />
        <Route
          path="movielist"
          element={
            <AddMovies movielist={movieList} setMovielist={setMovielist} />
          }
        />
        <Route path="moviedata" element={<MovieData />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="userlist" element={<UserList />} />

        <Route
          path="movies/:id"
          element={<WantedMovies movies={movieList} />}
        />
      </Routes>
    </div>
  );
}
function WantedMovies({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
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
