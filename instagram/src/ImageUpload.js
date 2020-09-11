import React, { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');
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
