import { useEffect, useState } from "react";

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
        <MoviesDetailes
          poster={movie.poster}
          name={movie.name}
          summary={movie.summary}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}
function MoviesDetailes({ poster, name, summary, rating }) {
  const [show, setshow] = useState(true);
  const ratingStyles = {
    color: rating >= 8 ? "green" : "red",
  };

  const summaryStyle = {
    display: show ? "block" : "none",
  };
  return (
    <div className="movie">
      <img src={poster} alt={`${name}'s poster`} />
      <div className="tittle">
        <h1>{name}</h1>
        <h1 style={ratingStyles}>⭐{rating}</h1>
      </div>
      <button onClick={() => setshow(!show)}>Taggle Summary</button>

      {/* {show && <p>{summary}</p>} */}
      <p style={summaryStyle}>{summary}</p>
    </div>
  );
}
