import { useState } from "react";

export function MovieCounter() {
  const [like, setLike] = useState(0);
  const [diseLike, setDiselike] = useState(0);
  // Dislike
  return (
    <div className="like-btn-container">
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDiselike(diseLike + 1)}>👎 {diseLike}</button>
    </div>
  );
}
