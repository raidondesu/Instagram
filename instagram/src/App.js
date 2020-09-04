import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./Firebase";

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect runs code based on a specific condition
  useEffect(() => {
    // code
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt=""
        />
      </div>
      {posts.map((posts) => (
        <Post
          username={posts.username}
          caption={posts.caption}
          imageUrl={posts.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
