import { useEffect, useState } from "react";
import { Movie } from "./Movie";

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
    <div>
      {movielist.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          deleteBtn={
            <button onClick={() => deleteMovie(movie.id)}>🗑️ Delete Me</button>
          }
        />
      ))}
    </div>
  );
}
