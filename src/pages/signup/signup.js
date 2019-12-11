import './signup.css';

import { Input } from '../../components/inputs/input1';
import React from 'react';
import background from './backgimage/blue.jfif';

var sectionStyle = {
    width: "100%",
    height: "auto",
    padding:'45px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  };

export default class Singup extends React.Component{

    constructor(){
        super()
            this.state={
          email:'',
          password:'',
          fullname:'',
        }
        this.handleForm=this.handleForm.bind(this)
        this.handlesubmit=this.handlesubmit.bind(this)
}

handleForm(event){
    console.log(this.state)
    event.preventDefault()
const {name,value} = event.target
this.setState({[name]:value})
}

handlesubmit(event){
    event.preventDefault()
    console.log(this.state)
    const data={
        email:this.state.email,
        password:this.state.password,
        firstname:this.state.fullname,
    }

const url=""
fetch(url, {
    methods:'POST',
    headers:{
        'Content-type' : 'Application/json'
    },
    body:JSON.stringify(data)

})
.then(response => response.json())
//.then(console.log(response))
}

render(){

    return(
        <div style={sectionStyle} >
        <div className="container mt-3 mb-3">
    <div className="row">
        <div className="col-md-4 text-white">
         <h1> Welcome</h1>
         <h1>{this.state.fullname}</h1>
         <h1>Finish filling the form</h1>
         <h1>To unlock Greate Deals</h1>   
    </div>

    <div className="col-md-4 ">
          <div className="card  mb-3 shadow signup-card">
          
                  <div className="card-body text-dark ">
                  <h5 className="card-title text-dark">Hotel-on-points</h5>
                    <div>
                        <div className="form-group">
                        <Input type="fullname"
                         name="fullname" 
                         value={this.state.fullname}
                         onChange={this.handleForm} 
                         className="form-control" 
                         placeholder="Enter your Fullname"
                         Label="Fullname"
                         />
                      </div>
                      <div className="form-group">
                        <Input type="email"
                         name="email" 
                         value={this.state.email}
                         onChange={this.handleForm} 
                         className="form-control" 
                         placeholder="Enter Username"
                         Label="Email"
                         smallText="your details are safe with us."
                         />
                      </div>

                      <div className="form-group">  
                      <Input 
                         type="password"
                         name="password" 
                         value={this.state.password}
                         onChange={this.handleForm} 
                         className="form-control" 
                         placeholder="Enter password"
                         Label="Password:"
                         smallText="password minimum is (8) characters."
                         />
                      </div>

                      <div className="form-group">  
                      <Input 
                         type="password"
                         name="confirmPassword" 
                         value={this.state.confirmpassword}
                         onChange={this.handleForm} 
                         className="form-control" 
                         placeholder="Enter your password again"
                         Label="Confirm Password:"
                         smallText="your details are safe with us."
                         />
                      </div>

                      <button type="submit" className="btin btn-block "  onClick={this.handlesubmit}>Signup</button>
                    </div>
                  </div>
                </div>
      </div>

      <div className="col-md-4">
          </div>
    </div>
    </div> 
  </div>
    )
}


}