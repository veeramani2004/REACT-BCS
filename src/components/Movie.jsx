import EditSharpIcon from "@mui/icons-material/EditSharp";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { useNavigate } from "react-router";
import { MovieCounter } from "./MovieCounter";

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
    <Card className="movie">
      <img src={poster} alt={`${name}'s poster`} />
      <div className="content-container">
        <h3>
          {name}
          <IconButton color="primary" onClick={() => navigate("/movies/" + id)}>
            <InfoSharpIcon />
          </IconButton>
          <IconButton color="primary" onClick={() => setshow(!show)}>
            {show ? <ExpandLessSharpIcon /> : <ExpandMoreSharpIcon />}
          </IconButton>
        </h3>

        <Rating
          name="half-rating-read"
          defaultValue={rating / 2}
          precision={0.2}
          readOnly
        />

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
    </Card>
  );
}
