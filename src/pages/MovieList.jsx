import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { Movie } from "../components/Movie";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export function MovieList() {
  const [movielist, setMovielist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function getMovies(searchTerm = "") {
    const url = new URL("https://68959016039a1a2b288f7c62.mockapi.io/movies");

    if (searchTerm) {
      url.searchParams.append("search", searchTerm);
    }

    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    setMovielist(data);
  }
  // async function getMovies() {
  //   const response = await fetch(
  //     "https://68959016039a1a2b288f7c62.mockapi.io/movies",
  //     { method: "GET" }
  //   );
  //   const data = await response.json();
  //   setMovielist(data);
  // }

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
    getMovies(searchTerm);
  };
  const searchMovies = (event) => {
    event.preventDefault();
    console.log("Searchinggg...", searchTerm);
    getMovies(searchTerm);
  };

  return (
    <div>
      <form onSubmit={searchMovies} className="add-movie-form">
        <TextField
          label="Search"
          slotProps={{
            input: {
              startAdornment: <SearchIcon />,
            },
          }}
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
      </form>

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
            }
          />
        ))}
      </div>
    </div>
  );
}
