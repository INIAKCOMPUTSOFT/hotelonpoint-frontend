import React from 'react'
import Input from '../../components/inputs/input1'
import './signup.css';

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
        <div>
        <div className="container mt-3 mb-3">
    <div className="row">
        <div className="col-md-4">
    </div>

    <div className="col-md-4 ">
          <div className="card  mb-3 shadow signup-card">
                  <div className="card-body text-dark ">
                  <h5 className="card-title">Hotel-on-points</h5>
                    <div>
                        <div className="form-group">
                        <Input type="fullname"
                         name="fullname" 
                         value={this.state.firstname}
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

                      <button type="submit" className="btn btn-block btn-success"  onClick={this.handlesubmit}>login</button>
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