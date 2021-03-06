import React from 'react';
import Files from 'react-files';
import './fileupload.css';


export default class FilUpload extends React.Component{
    constructor(){
        super();
    this.state={
        files:[]
    }
}

  onFilesChange=(files) =>{
    this.setState({files})
    this.props.getImage(this.state.files)
  }
 
  onFilesError(error, file) {
    console.log('error code ' + error.code + ': ' + error.message)
  }
 
  render() {
    return (
      <div className="files">
        <Files
          className='files-dropzone'
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          accepts={['image/png', 'image/jpeg','.pdf', 'audio/*']}
          multiple={true}
          maxFiles={4}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        ><div className=" piccard">
          <p className="tex">Drop files here or click to upload</p>
          <div className="blogphoto">
        {this.state.files[0]  && (
            this.state.files.map(img => (
                    <img src={img.preview.url} alt="just uploaded" className="imageup"/>
            ))
        )}
        </div>
          </div>
        </Files>

        
      </div>

    )
  }
}