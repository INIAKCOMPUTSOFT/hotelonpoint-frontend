import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import { getUser, signupUser } from "../../redux/actions/userActions";

import CircularProgress from "@material-ui/core/CircularProgress";
import { Input } from "../../components/inputs/input1";
import React from "react";


import logo from "../../logo/HOP.svg";


class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      subject: "",
      fullname: "",
      description: ""
    };

  }

 
 

  handleForm(event) {
    console.log(this.state);
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handlesubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const data = {
      email: this.state.email,
      subject: this.state.password,
      fullName: this.state.fullname,
      description: this.state.confirmpassword
    };
    this.props.signupUser(data);
  }

  render() {
       return (
      <div>
        <div className="container-fluid mt-3 mb-3">
          <div className="row ">
            <div
              className="col-md-6 text-white d-lg-none d-md-block"
              style={{ letterSpacing: 3, lineHeight: 5 }}
            >
             
            </div>

            <div className="col-md-6  ">
              <div className="signup-card">
                <div className="card  mb-3 shadow ">
                  <div className="card-body text-dark ">
                    {/* <h5 className="card-title text-dark">Hotel-on-points</h5> */}
                    <img src={logo} width="200" alt="" />
                    <div>
                      <div className="form-group">
                        <Input
                          type="text"
                          name="fullname"
                          value={this.state.fullname}
                          onChange={this.handleForm}
                          className="form-control"
                          placeholder="Enter your Full name"
                          Label="Full name"
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
                          Label="Email"
                        />
                        
                      </div>

                      <div className="form-group">
                        <Input
                          type="text"
                          name="subject"
                          value={this.state.subject}
                          onChange={this.handleForm}
                          className="form-control"
                          placeholder="Your subject"
                          Label="Subject:"
                          
                        />
                        
                      </div>

                      <div className="form-group">
                        <Input
                          type="text"
                          name="gescription"
                          value={this.state.description}
                          onChange={this.handleForm}
                          className="form-control"
                          placeholder="Description"
                          Label="Description"
                        />
                       
                      </div>
                      <button
                        type="submit"
                        onClick={this.handlesubmit}
                        variant="contained"
                        color="primary"
                        className="btn btn-block btin"
                        
                      >
                        Submit
                         
                      </button>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 text-white d-none d-lg-block"
              style={{ letterSpacing: 3, lineHeight: 5 }}
            >
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactForm;
