import { useState } from "react";

// onclick (HTML) -> onClick (React)
// hook - useState - all are function - 'use'
// state - App State - Current value
// Component = F(S)
export function Counter() {
  const [like, setLike] = useState(0);
  const [diseLike, setDiselike] = useState(0);
  // Dislike
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>

      <button onClick={() => setDiselike(diseLike + 1)}>👎 {diseLike}</button>

      <progress max={like + diseLike} value={like}></progress>

      {like >= 10 + diseLike ? <h1>You Are Awesome</h1> : " "}
    </div>
  );
}
