import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Component/Home";
import PostLayout from "./Component/PostLayout";
import PostDetails from "./Component/PostDetails";
import NotFound from "./Component/NotFound";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PostLayout />}>
          <Route
            index
            element={
              <div style={{ padding: "20px", fontStyle: "italic" }}>
                Select a post from the list above to read.
              </div>
            }
          />
          <Route path=":id" element={<PostDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
