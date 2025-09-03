import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { API } from "../global";

export function EditMovie() {
  const { id } = useParams();
  console.log(id);

  const [poster, setPoster] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const resetMovieForm = () => {};

  const navigate = useNavigate();

  async function getMovie(id) {
    const response = await fetch(`${API}/movies/` + id, { method: "GET" });
    const data = await response.json();

    setName(data.name);
    setPoster(data.poster);
    setRating(data.rating);
    setSummary(data.summary);
    setTrailer(data.trailer);
  }

  useEffect(() => {
    getMovie(id);
  }, [id]);

  const editMovie = async (event) => {
    event.preventDefault(); // no refresh

    const updatedMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    const response = await fetch(
      "https://68959016039a1a2b288f7c62.mockapi.io/movies/" + id,
      {
        method: "PUT",
        body: JSON.stringify(updatedMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    navigate("/movies");
    resetMovieForm();
  };

  return (
    <form onSubmit={editMovie} className="edit-movie-form">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter movie name"
        type="text"
      />
      <input
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Past the movie poster url"
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

      <button type="summit" style={{ backgroundColor: "blue" }}>
        SAVE
      </button>
    </form>
  );
}
