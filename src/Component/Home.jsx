import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data";

export const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>
      <p>Welcome to our Blog App!</p>
      <h2>Recent Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
