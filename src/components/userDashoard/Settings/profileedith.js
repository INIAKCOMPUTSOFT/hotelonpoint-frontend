import CardEdit from './cardedith';
import React from 'react';
import SelfProfile from './selfprofile';
import UploadImg from './uploadimg';

export default class Profile extends React.Component{

handleinput=(event)=>{
event.preventDefault();
const {name,value} = event.target
this.setState({[name]: value})

console.log(this.state,'input values')
}


render(){
    return(
        <div class="card">
        <div class="card-header">Your Account Setup</div>
        <div class="card-body">
            <div className="row">
                <div className="col-md-4">
              <SelfProfile handleinput={this.handleinput}/>
                </div>
                <div className="col-md-4">
                <CardEdit handleinput={this.handleinput}/>
                </div>
                <div className="col-md-4">
                <UploadImg handleinput={this.handleinput}/>
            </div>
        </div>
      </div>
    </div>
    )
}

} 