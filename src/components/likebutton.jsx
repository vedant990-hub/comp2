import { useState } from "react";

// LikeButton Component
const LikeButton = ({ isLiked, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`like-button ${isLiked ? "liked" : ""}`}
    >
      {isLiked ? "❤ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
