import { Link, Navigate, Route, Routes } from "react-router";
import { ColorGame } from "./ColorGame";
import { MovieDetails } from "./MovieDetailes";
import { MovieList } from "./MovieList";
import "./styles.css";
import { UserList } from "./UserList";
import { AddMovie } from "./AddMovie";

// Component = Logic + UI
export default function App() {
  // Logic Starts

  // Logic End
  return (
    <div className="App">
      <nav>
        <Link to="/colorgame">colorgame | </Link>
        <Link to="/userlist">userlist | </Link>
        <Link to="/movies/new">Add Movie | </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="films" element={<Navigate to="/movies" replace />} />
        <Route path="movies" element={<MovieList />} />
        <Route path="movies/new" element={<AddMovie />} />
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="userlist" element={<UserList />} />

        <Route path="movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}
