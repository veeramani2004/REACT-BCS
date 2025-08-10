import { useState } from "react";
import { useNavigate } from "react-router";

export function AddMovie() {
  const [poster, setPoster] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
    setTrailer("");
  };

  const navigate = useNavigate();

  const addMovie = async (event) => {
    event.preventDefault(); // no refresh

    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    // POST
    // 1. method - POST
    // 2. Data - Body & JSON
    // 3. Headers - JSON

    const response = await fetch(
      "https://68959016039a1a2b288f7c62.mockapi.io/movies",
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    navigate("/movies");
    // Existing movies + new Movie
    // setMovies([...movies, newMovie]);
    resetMovieForm();
  };

  return (
    <form onSubmit={addMovie}>
      <input
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
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
      <input
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        type="text"
        placeholder="Trailer"
      />

      <button type="summit"> ➕ Add</button>
    </form>
  );
}
