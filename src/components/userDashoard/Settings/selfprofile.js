import Axios from 'axios';
import { Input } from '../../inputs/input1';
import React from "react";

export default class SelfProfile extends React.Component{
state={
firstname:'',
lastname:'',
email:'',
password:'',
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

    handleinput=(event)=>{
        event.preventDefault();
        const {name,value} = event.target
        this.setState({[name]: value})
        
        console.log(this.state,'input values')
        }

render(){

return(
    <div class="card">                
    <div class="card-body">
    <Input type="text" name="firstname" value={this.state.firstname} onChange={this.handleinput} 
    Label="Firstname"/>
    <Input type="text" name="lastname" value={this.state.lastname} onChange={this.handleinput} 
    Label="Lastname"/>
    <Input type="text" name="email" value={this.state.email} onChange={this.handleinput} 
    Label="Email"/>
    <Input type="password" name="password" value={this.state.password} onChange={this.handleinput} 
    Label="Password"/>
    </div>
    <button onClick={this.handlesubmit} className="btn btn-primary btn-block">Update my Profile</button>
    </div>

)


}

}