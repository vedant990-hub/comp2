import { useState } from "react";
import "./postcard.css"
import LikeButton from "./likebutton";

const PostCard = ({ post, onLikeToggle }) => {
    return (
      <div className="post-card">
        <img src={post.profileImage} alt={post.username} className="profile-pic" />
        <div className="post-content">
          <h3>@{post.username}</h3>
          <p>{post.content}</p>
          <LikeButton isLiked={post.isLiked} onToggle={() => onLikeToggle(post.id)} />
        </div>
      </div>
    );
  };

  export default PostCard;