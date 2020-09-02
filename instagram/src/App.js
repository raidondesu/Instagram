import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt=""
        />
      </div>
      <Post
        username="raidondesu"
        caption="Seattle !"
        imageUrl="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/06/20/104540684-GettyImages-530874379.1910x1000.jpg"
      />
      <Post username="Microsoft" caption="Seattle !" imageUrl="" />
      <Post username="Raidondesu" caption="Seattle !" imageUrl="" />
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
