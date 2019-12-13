import CircularProgress from "@material-ui/core/CircularProgress";
import React from 'react';
import Files from 'react-files';
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendABlog } from '../../redux/actions/userActions';
import Back from './BlogBackimag/road.jpeg';
import './blogform.css';
import './fileupload.css';


var sectionStyle = {
    width: "100%",
    height: "auto",
    padding: "10px",
    backgroundImage: `url(${Back})`,
    backgroundSize: "cover"
  };

class BlogForm extends React.Component{

constructor(){
    super();
    this.state={
        title:'',
        content:'', 
        loading: false,
        image: []
    }
}

handleForm=(event)=> {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  getImage = (img) => {
    this.setState({image : img})
  }

  onFilesChange=(image) =>{
    this.setState({image})
  }
 
  onFilesError(error, file) {
    console.log('error code ' + error.code + ': ' + error.message)
  }
 

  handlesubmit=(event)=> {

    const { title, content, image } = this.state
    const data = {
      title,
      content,
      image
    }
      const form = new FormData()
      
      form.append('title', this.state.title);
      form.append('content', this.state.content);

      for (let x = 0; x < this.state.image.length; x++) {
        form.append('image', this.state.image[x]);
      }
      this.setState({loading : true})
      this.props.sendABlog(form)
  }
    

    render(){
      const {loading } = this.state.loading
        return(
            <div style={sectionStyle}>
              <ToastContainer />
                <div className="row">    
                <div className="col-md-6 c ">
                <p className="text-center text-light">Confirm the blog contents here</p>
                <h1 className="text-center text-light">{this.state.title}</h1>
                <p className="text-center text-light">{this.state.content}</p>
                </div>
                <div className="col-md-6 c">
                <div className="card cg text-center text-light">
                <div class="card-header">
                <h4>Upload Blog</h4>
                </div>
                <div className="card-body">
                <div class=" input-lg">
                  <label className="">Title your Blog</label> 
                <input type="text" onChange={this.handleForm}
                  name="title" value={this.state.blogtitle} placeholder="Give it the best title in the word" class="form-control" />
                
                </div>
                <div>
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
        {this.state.image[0]  && (
            this.state.image.map(img => (
                    <img src={img.preview.url} alt="just uploaded" className="imageup"/>
            ))
        )}
        </div>
          </div>
        </Files>
                </div>
                <br/>
                <div >
                  <label className="">Blog Content</label> 
                <textarea class="form-control"  onChange={this.handleForm} name="content" value={this.state.blogcontent} id="exampleFormControlTextarea1" rows="3"></textarea>

                </div>
                </div>
                <button onClick={this.handlesubmit} className="btn btn-primary btn-block btn-small" disabled={loading}> 
                Post {loading && (
                        <CircularProgress size={30}  />
                      )}
                </button>
                </div>
               
               
                </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => ({ user })

const mapActionsToProps = {
  sendABlog
};

export default connect(mapStateToProps, mapActionsToProps)(BlogForm)