import { useEffect, useState } from "react";
import { Movie } from "./Movie";

export function AddMovies() {
  const [movielist, setMovielist] = useState([]);
  const [poster, setPoter] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState();
  const [summary, setSummary] = useState("");

  async function getMovies() {
    const response = await fetch(
      "https://68959016039a1a2b288f7c62.mockapi.io/movies"
    );
    const data = await response.json();
    setMovielist(data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <input
        value={poster}
        onChange={(event) => setPoter(event.target.value)}
        placeholder="Past the movie poster url"
        type="text"
      />

      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter movie name"
        type="text"
      />

      <input
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter movie Rateing"
        type="number"
      />

      <textarea
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Enter movie summary"
        type="text"
      />
      <button>Post</button>
      {movielist.map((movie) => (
        <Movie movie={movie} id={movie.id} />
      ))}
    </div>
  );
}
