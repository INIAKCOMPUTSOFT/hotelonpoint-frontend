import React from 'react'
import Axios from 'axios';
import {Input} from '../../inputs/input1';
import Files from 'react-files';

export default class About extends React.Component{

state={
State :'',
Country:"",
address:'',
dateofbirth:'',
image: [], 
displayname:'',
}


handleinput=(e)=>{
e.preventDefault();
const {name,value} = e.target
this.setState({[name]: value})
}

handlesubmit=()=>{
Axios
.post(`/user/logins`, data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })


    const data={
        displayname :this.state.displayname,
        address:this.state.address,
        country:this.state.country,
        state:this.state.state,
        dateofbirth:this.state.dateofbirth,
        }

        console.log(data)
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
          image:this.state.image
        }
          const form = new FormData() 
          form.append('displayname', this.state.displayname)  
          for (let x = 0; x < this.state.image.length; x++) {
            form.append('image', this.state.image[x]);
          }
          this.setState({loading : true})
          //console.log('here', form.getAll`('image'))
          // this.props.sendABlog(form)
      }

render(){
    return(
        <div class="card">
        <div class="card-header">About me</div>
        <div class="card-body">
        <div className="row">
        <div className="col-md-4">
        </div>
            
          <div className="col-md-4">     
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
        ><div style={{borderStyle:'dotted', mouse:'pointer'}}>
          <p className="tex">Drop files here or click to upload</p>
          <div className="blogphoto">
        {this.state.image[0]  && (
            this.state.image.map(img => (
            <img src={img.preview.url} alt="just uploaded" className="imageup" />
            ))
        )}
        </div>
          </div>
        </Files>
        <button onClick={this.handlephotosubmit} className="btn btn-primary btn-block">Upload My Picture</button>
        <Input type="text" name="displayname" value={this.state.displayname} onchange={this.handleinput} 
        Label="Display Name"/>
        <Input type="date" name="dateofbirth" value={this.state.dateofbirth} onchange={this.handleinput} 
        Label="Date Of Birth"/>
        <Input type="text" name="country" value={this.state.country} onchange={this.handleinput} 
        Label="Country/Region"/>
        <Input type="text" name="state" value={this.state.state} onchange={this.handleinput} 
        Label="State"/>
        <Input type="text" name="address" value={this.state.address} onchange={this.handleinput} 
        Label="Address"/>
        <button onClick={this.handlesubmit} className="btn btn-primary btn-block">Upload My details</button>
        </div>
        <div className="col-md-4">
        </div>
        </div>
                </div>
        
                </div>
                
           
    
    )
}




}