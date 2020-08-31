import React from "react";
import "./Post.css";

function Post() {
  return (
    <div>
      <h3>Username</h3>
      {/* header, avatar + username */}
      <img
        className="post__image"
        src="https://venturebeat.com/wp-content/uploads/2015/01/Microsoft-sign-campus.jpg?fit=4160%2C2340&strip=all"
      />
      <h4 className="post__text">
        <strong>Microsoft</strong>
      </h4>
      <p>Redmond Campus!</p>
      {/* image */} {/* username + caption */}
    </div>
  );
}

export default Post;
