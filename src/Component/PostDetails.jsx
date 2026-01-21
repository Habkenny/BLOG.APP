import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../data";

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div>
        <h2>Post not found</h2>
        <Link to="/posts">View all posts</Link>
      </div>
    );
  }

  return (
    <article
      style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}
    >
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
};

export default PostDetails;
