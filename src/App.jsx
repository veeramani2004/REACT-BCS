import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { AddMovie } from "./pages/AddMovie";
import { ColorGame } from "./pages/ColorGame";
import { EditMovie } from "./pages/EditMovie";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetailes";
import { MovieList } from "./pages/MovieList";
import { NotFound } from "./pages/NotFound";
import { UserList } from "./pages/UserList";
import "./styles.css";
import Button from "@mui/material/Button";
import { Products } from "./pages/Products";

// Component = Logic + UI
export default function App() {
  // Logic Starts

  // Logic End
  const navigate = useNavigate();
  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies")}>
            Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies/new")}>
            Add Movie
          </Button>
          <Button color="inherit" onClick={() => navigate("/colorgame")}>
            Color Game
          </Button>
          <Button color="inherit" onClick={() => navigate("/userlist")}>
            User List
          </Button>
          <Button color="inherit" onClick={() => navigate("/products")}>
            Products
          </Button>
        </Toolbar>
      </AppBar>

      <div className="main-container">
        <Routes>
          <Route path="products" element={<Products />} />
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
