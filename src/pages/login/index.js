import React from 'react'
//import {Link} from 'react-router-dom'
import Input from '../../components/inputs/input1'
import './login.css';


class Login extends React.Component{

constructor(){
        super()
            this.state={
          email:'',
          password:'',
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
        password:this.state.password
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

    return (
     <div>
          <div className="container mt-3 mb-3">
      <div className="row">
          <div className="col-md-4">
      </div>

      <div className="col-md-4 ">
            <div className="card  mb-3 shadow login-card">
                    <div className="card-body text-dark ">
                      <div>
                          <h5 className="card-title">ARIDOLPH HOTELS</h5>
                        <div className="form-group">

                          <Input type="email"
                           name="email" 
                           value={this.state.email}
                           onChange={this.handleForm} 
                           className="form-control" 
                           placeholder="Enter Username"
                           Label="Email"
                           small="your details are safe with us."
                           />
                        </div>

                        <div className="form-group">  
                        <Input 
                           type="email"
                           name="email" 
                           value={this.state.email}
                           onChange={this.handleForm} 
                           className="form-control" 
                           placeholder="Enter Username"
                           Label="Email:"
                           small="your details are safe with us."
                           />
                        </div>

                        <button type="submit" className="btn btn-block btn-success"  onClick={this.handlesubmit}>login</button>
                      </div>
                      <p>No account sign up </p>
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


export default Login