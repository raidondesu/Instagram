import React, { useState } from "react";
import { Button } from "@material-ui/core";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      {/* Caption */}
      {/* File picker */}
      {/* Post Button */}
      <input type="text" placeholder='Enter a caption..' onChange={event => setCaption(event.target.value)} value={caption} />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleChange} >
        Upload
      </Button>
    </div>
  );
}

export default ImageUpload;
