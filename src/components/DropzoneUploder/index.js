import React, { Component } from "react";
import Dropzone from "react-dropzone";
import firebase from "../../firebase";

const { storage } = firebase;
const storageRef = storage.ref();

class DropzoneUploader extends Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
    const file = acceptedFiles[0];
    // implement here
    //console.log("file >>", file);

    const uploadTask = storageRef.child(`/products/${file.name}`).put(file);
    // products คือชื่อใน db

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //console.log("progress >>", progress);
        // TODO : handleProgress
        this.props.handleProgress(progress);
      },
      function(error) {
        console.log("error ", error);
      },
      () =>  {
        //success
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          this.props.input.onChange({
            imageUrl: url
          });
        });
      }
    );
  };

  render() {
    return (
      <Dropzone
        className="input-dropzone dropzone"
        onDrop={files => this.onDrop(files)}
        accept="image/png,image/jpeg"
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Add Image</p>
          </div>
        )}
      </Dropzone>
    );
  }
}

export default DropzoneUploader;
