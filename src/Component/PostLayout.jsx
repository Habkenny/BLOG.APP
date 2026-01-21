import React from "react";
import { Outlet, Link } from "react-router-dom";
import { posts } from "../data";

const PostLayout = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to Home</Link>
      <h1>Blog Posts</h1>
      <nav style={{ marginBottom: "20px" }}>
        <h3>All Posts:</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default PostLayout;
