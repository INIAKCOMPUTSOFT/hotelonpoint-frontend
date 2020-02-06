import React from 'react'
import Axios from 'axios';
import {Input} from '../../inputs/input1';
import Files from 'react-files';

export default class Profile extends React.Component{

state={
dateofbirth:'',
country:'',
firstname:'',
lastname:'',
email:'',
password:'',
cardname :'',
cardnumber:"",
cvv:'',
cardyear:'',
image: [], 
displayname:'',
}


handleinput=(e)=>{
e.preventDefault();
const {name,value} = e.target
this.setState({[name]: value})
console.log(this.state)
}

handlecardsubmit=()=>{
Axios
.post(`/user/logins`, data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })


    const data={
        cardname :this.state.cardname,
        cardnumber:this.state.cardnumber,
        cvv:this.state.cvv,
        cardyear:this.state.cardyear
        }

        console.log(data)
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
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password
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

render(){
    return(
        <div class="card">
        <div class="card-header">Your Account Setup</div>
        <div class="card-body">
            <div className="row">
                <div className="col-md-4">
                <div class="card">                
                <div class="card-body">
                <Input type="text" name="firstname" value={this.state.firstname} onchange={this.handleinput} 
                Label="Firstname"/>
                <Input type="text" name="lastname" value={this.state.lastname} onchange={this.handleinput} 
                Label="Lastname"/>
                <Input type="text" name="email" value={this.state.email} onchange={this.handleinput} 
                Label="Email"/>
                <Input type="password" name="password" value={this.state.password} onchange={this.handleinput} 
                Label="Password"/>
                </div>
                <button onClick={this.handlesubmit} className="btn btn-primary btn-block">Update my Profile</button>
                </div>
                </div>
                <div className="col-md-4">
                <div class="card">                
                <div class="card-body">
                <Input type="text" name="cardname" value={this.state.cardname} onchange={this.handleinput} 
                Label="Card Name"/>
                <Input type="text" name="cardnumber" value={this.state.cardnumber} onchange={this.handleinput} 
                Label="Card Number"/>
                <Input type="text" name="cvv" value={this.state.cvv} onchange={this.handleinput} 
                Label="CVV"/>
                <Input type="text" name="cardyear" value={this.state.cardyear} onchange={this.handleinput} 
                Label="Card Year"/>
                </div>
                <button onClick={this.handlecardsubmit} className="btn btn-primary btn-block">Upload my card</button>
                </div>
                </div>
                <div className="col-md-4">
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
        ><div style={{borderStyle:'dotted', mouse:'pointer'}}>         
          <div className="blogphoto">
        {this.state.image[0]  && (
            this.state.image.map(img => (
            <img src={img.preview.url} alt="just uploaded" className="imageup" />
            ))
        )}
        </div>
          </div>
        </Files>
        <Input type="text" name="displayname" value={this.state.displayname} onchange={this.handleinput} 
        Label="Display Name"/>
        <Input type="date" name="dateofbirth" value={this.state.dateofbirth} onchange={this.handleinput} 
        Label="Date Of Birth"/>
        <Input type="text" name="country" value={this.state.country} onchange={this.handleinput} 
        Label="Country/Region"/>
        {/* <Input type="text" name="state" value={this.state.state} onchange={this.handleinput} 
        Label="State"/>
        <Input type="text" name="address" value={this.state.address} onchange={this.handleinput} 
        Label="Address"/> */}
                </div>
        <button onClick={this.handlephotosubmit} className="btn btn-primary btn-block">Upload My Picture</button>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
}






}