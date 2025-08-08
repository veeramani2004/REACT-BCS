import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
import { MovieDetailes } from "./MovieDetailes";

export function MovieData() {
  return (
    <div className="movie-data-container">
      {INITIAL_MOVIES.map((movie, index) => (
        <MovieDetailes id={index} movie={movie} />
      ))}
    </div>
  );
}
