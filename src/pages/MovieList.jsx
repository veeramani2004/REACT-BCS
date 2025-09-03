import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { Movie } from "../components/Movie";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { API } from "../global";

export function MovieList() {
  const [movielist, setMovielist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function getMovies(searchTerm = "") {
    setErrorMsg("");
    const url = new URL(`${API}/movies`);

    if (searchTerm) {
      url.searchParams.append("search", searchTerm);
    }

    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      if (response.status == 404) {
        throw new Error("Not found"); // manually
      }
      setMovielist(data);
    } catch (err) {
      console.log("Oops:", err);
      // setMovies([]);
      setErrorMsg("Movie not found 😔");
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = async (id) => {
    console.log("Deleting...", id);

    const response = await fetch(`${API}/movies/${id}`, { method: "DELETE" });

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
          helperText={errorMsg}
          error={errorMsg}
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
