import { Link, Navigate, Route, Routes } from "react-router";
import { AddMovie } from "./pages/AddMovie";
import { ColorGame } from "./pages/ColorGame";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetailes";
import { MovieList } from "./pages/MovieList";
import { NotFound } from "./pages/NotFound";
import "./styles.css";
import { UserList } from "./pages/UserList";
import { EditMovie } from "./pages/EditMovie";
import { DrawerAppBar } from "./components/DrawerAppBar";

// Component = Logic + UI
export default function App() {
  // Logic Starts

  // Logic End

  return (
    <div className="App">
      <DrawerAppBar />
      {/* <nav>
        <Link to="/">Home | </Link>
        <Link to="/colorgame">colorgame | </Link>
        <Link to="/movies">Movies | </Link>
        <Link to="/movies/new">Add Movie | </Link>
        <Link to="/userlist">userlist | </Link>
      </nav> */}
      <div className="main-container">
        <Routes>
          <Route path="films" element={<Navigate to="/movies" replace />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="movies/new" element={<AddMovie />} />
          <Route path="colorgame" element={<ColorGame />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="editmovie/:id" element={<EditMovie />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
