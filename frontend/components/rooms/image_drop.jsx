import React from 'react';
import request from 'superagent';
import Dropzone from 'react-dropzone';
const CLOUDINARY_UPLOAD_PRESET = 'ox1h6aai';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dluh2fsyd/upload';


export default class DropForm extends React.Component {

  constructor(props) {
    super(props);
    console.log("Props", this.props.currentState);
    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    // console.log("state", CreateRoom.state);
    this.handleImageUpload(files[0]);
  }
  componentWillReceiveProps() {
    console.log("Props RECEIVE", this.props.currentState);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }
    render() {
      console.log("STATE", this.state);
      return(
        <div>
          <div className="FileUpload">
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
          </div>

          <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div >
              <p>{this.state.uploadedFile.name}</p>

              <img src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
          </div>
        </div>
      );
  }

}
