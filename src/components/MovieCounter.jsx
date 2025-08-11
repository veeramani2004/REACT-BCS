import { useState } from "react";
import { IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export function MovieCounter() {
  const [like, setLike] = useState(0);
  const [diseLike, setDiselike] = useState(0);
  // Dislike
  return (
    <div className="like-btn-container">
      <IconButton color="primary" onClick={() => setLike(like + 1)}>
        <ThumbUpIcon />
        {like}
      </IconButton>
      <IconButton color="error" onClick={() => setDiselike(diseLike + 1)}>
        <ThumbDownIcon />
        {diseLike}
      </IconButton>
      {/* <button onClick={() => setLike(like + 1)}>👍 {like}</button> */}
      {/* <button onClick={() => setDiselike(diseLike + 1)}>👎 {diseLike}</button> */}
    </div>
  );
}
