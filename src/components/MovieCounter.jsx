import { useState } from "react";
import { IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Badge from "@mui/material/Badge";

export function MovieCounter() {
  const [like, setLike] = useState(0);
  const [diseLike, setDiselike] = useState(0);
  // Dislike
  return (
    <div className="like-btn-container">
      <Badge
        badgeContent={like}
        color="primary"
        onClick={() => setLike(like + 1)}
      >
        <IconButton>
          <ThumbUpIcon color="primary" />
        </IconButton>
      </Badge>

      <Badge
        badgeContent={diseLike}
        color="error"
        onClick={() => setDiselike(diseLike + 1)}
      >
        <IconButton>
          <ThumbDownIcon color="error" />
        </IconButton>
      </Badge>
    </div>
  );
}
