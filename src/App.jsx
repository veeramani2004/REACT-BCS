import { MovieData } from "./MovieData";
import { MsgList } from "./MsgList";
import "./styles.css";
import { UserList } from "./UserList";

// Component = Logic + UI
export default function App() {
  // Logic Starts

  // Logic End
  return (
    <div className="App">
      {/* <MsgList />
      <UserList /> */}
      <MovieData />
    </div>
  );
}

export function MovieDetailes({ poster, name, summary, rating }) {
  return (
    <div className="movie">
      <img src={poster} alt={`${name}'s poster`} />
      <div className="tittle">
        <h1>{name}</h1>
        <h1>⭐{rating}</h1>
      </div>
      <p>{summary}</p>
    </div>
  );
}
