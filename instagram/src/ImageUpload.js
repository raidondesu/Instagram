import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { storage, db } from "./Firebase";
import firebase from "firebase";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ..
        const progress = Math.round(
          (snapshot.bytestransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function..
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function ..
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            // posting image inside database
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url
            })
          })
      }
    )
  }

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
