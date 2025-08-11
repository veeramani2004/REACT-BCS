import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { Movie } from "../components/Movie";

export function MovieList() {
  const [movielist, setMovielist] = useState([]);

  async function getMovies() {
    const response = await fetch(
      "https://68959016039a1a2b288f7c62.mockapi.io/movies",
      { method: "GET" }
    );
    const data = await response.json();
    setMovielist(data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = async (id) => {
    console.log("Deleting...", id);

    const response = await fetch(
      `https://68959016039a1a2b288f7c62.mockapi.io/movies/${id}`,
      { method: "DELETE" }
    );

    console.log("Status:", response.status);
    const data = await response.json();
    console.log("Response data:", data);
    getMovies();
  };

  return (
    <div className="movie-list-container">
      {movielist.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          deleteBtn={
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => deleteMovie(movie.id)}
            >
              <DeleteIcon />
            </IconButton>
            // <button onClick={() => deleteMovie(movie.id)}>🗑️ Delete Me</button>
          }
        />
      ))}
    </div>
  );
}
