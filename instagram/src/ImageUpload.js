import React from "react";

function ImageUpload() {
  const [caption, setCaption] = useState('');
  return (
    <div>
      {/* Caption */}
      {/* File picker */}
      {/* Post Button */}
      <input type="text" placeholder='Enter a caption..' onChange={event => setCaption(event.target.value) value=""}
    </div>
  );
}

export default ImageUpload;
