import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="RafehQazi"
          src="/static/images/avatar/1.jpg"
        />
        {/* header, avatar + username */}
      </div>
      <h3>Username</h3>
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
