import Axios from 'axios';
import Files from 'react-files';
import { Input } from '../../inputs/input1';
import React from 'react';
import { connect } from 'react-redux';

class Upload extends React.Component{
state={

    image: [], 
    displayname:'',
    dateofbirth:'',
    country:'',
    pictureChange:[],

}

componentDidMount() {
  Axios.get('https://calm-anchorage-14244.herokuapp.com/user')
  .then(result => this.setState({pictureChange : result.data.data, loading:false}))
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

handlephotosubmit=(event)=> {
    const data = {
      displayname:this.state.displayname,
      image:this.state.image
    }
      const form = new FormData() 
      form.append('displayname', this.state.displayname)
      form.append('dateofbirth', this.state.dateofbirth)
      form.append('country', this.state.country)    
      for (let x = 0; x < this.state.image.length; x++) {
        form.append('image', this.state.image[x]);
      }
      this.setState({loading : true})
      //console.log('here', form.getAll`('image'))
      // this.props.sendABlog(form)
  }

  handleinput=(event)=>{
    event.preventDefault();
    const {name,value} = event.target
    this.setState({[name]: value})
    
    console.log(this.state,'input values')
    }
    
render(){
  const {userData} = this.props.user
const picture  =this.state.pictureChange
    return(
<div className="card">
                <div className="card-body">
        <Files
          className='files-dropzone'
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          accepts={['image/png', 'image/jpeg','.pdf', 'audio/*']}
          multiple={true}
          maxFiles={1}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        ><div style={{borderStyle:'solid', height:"10rem", mouse:'pointer'}}>         
          <div className="blogphoto">
        {this.state.image[0]  && (
            this.state.image.map(img => (
              <img src={img.preview.url} alt="just uploaded" className="imageup" style={{ height:"9rem", }}/>
            ))
        )}
        </div>
          </div>
        </Files>
        <Input type="text" name="displayname" value={this.state.displayname} onChange={this.handleinput} 
        Label="Display Name"/>
        <Input type="date" name="dateofbirth" value={this.state.dateofbirth} onChange={this.handleinput} 
        Label="Date Of Birth"/>
        <Input type="text" name="country" value={this.state.country} onChange={this.handleinput} 
        Label="Country/Region"/>
        {/* <Input type="text" name="state" value={this.state.state} onchange={this.handleinput} 
        Label="State"/>
        <Input type="text" name="address" value={this.state.address} onchange={this.handleinput} 
        Label="Address"/> */}
        
        </div>
        <button onClick={this.handlephotosubmit} className="btn btn-primary btn-block">Upload My Picture</button>
        </div>
                


    )



}


}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Upload)