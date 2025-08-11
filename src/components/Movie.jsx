import Rating from "@mui/material/Rating";
import { useState } from "react";
import { useNavigate } from "react-router";
import { MovieCounter } from "./MovieCounter";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { IconButton } from "@mui/material";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

export function Movie({
  movie: { id, poster, name, summary, rating },
  deleteBtn,
}) {
  const [show, setshow] = useState(true);

  const summaryStyle = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();
  return (
    <div className="movie">
      <img src={poster} alt={`${name}'s poster`} />
      <div className="content-container">
        <div className="tittle-container">
          <h3>{name}</h3>

          <IconButton color="primary" onClick={() => navigate("/movies/" + id)}>
            <InfoSharpIcon />
          </IconButton>
          <IconButton color="primary" onClick={() => setshow(!show)}>
            {show ? <ExpandLessSharpIcon /> : <ExpandMoreSharpIcon />}
          </IconButton>
        </div>
        <Rating
          name="half-rating-read"
          defaultValue={rating / 2}
          precision={0.5}
          readOnly
        />

        {/* <button onClick={() => navigate("/movies/" + id)}> Trailer</button> */}
        {/* <button onClick={() => setshow(!show)}>Taggle Summary</button> */}
        <p style={summaryStyle}>{summary}</p>
        <div className="countar-delete-edit-container">
          <MovieCounter />
          <div>
            <IconButton
              color="primary"
              onClick={() => navigate("/editmovie/" + id)}
            >
              <EditSharpIcon />
            </IconButton>

            {deleteBtn}
          </div>
        </div>
      </div>

      {/* {show && <p>{summary}</p>} */}
    </div>
  );
}
