import "react-toastify/dist/ReactToastify.css";
import "./signup.css";

import { getUser, signupUser } from "../../redux/actions/userActions";

import CircularProgress from "@material-ui/core/CircularProgress";
import { Input } from "../../components/inputs/input1";
import React from "react";
import { ToastContainer } from "react-toastify";
import background from "./backgimage/blue.jfif";
import { connect } from 'react-redux';

var sectionStyle = {
  width: "100%",
  height: "auto",
  padding: "10px",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover"
};

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      fullname: "",
      confirmpassword: "",
      isHotelOwner: true
    };
    this.handleForm = this.handleForm.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
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
      password: this.state.password,
      fullName: this.state.fullname,
      confirmPassword: this.state.confirmpassword,
      isHotelOwner: this.state.isHotelOwner
    };
    this.props.signupUser(data);
  }

  render() {
    const {
      UI: { loading, errors }
    } = this.props;
    return (
      <div style={sectionStyle}>
        <div className="container-fluid mt-3 mb-3">
          <div className="row ">
            <div
              className="col-md-6 text-white d-lg-none d-md-block"
              style={{ letterSpacing: 3, lineHeight: 5 }}
            >
              <h1 style={{ fontWeight: 40 }}>
                {" "}
                <span style={{ color: "gold" }}>W</span>elcome{" "}
                <span style={{ color: "gold" }}>.</span>
              </h1>
              <h1 style={{ textTransform: "capitalize" }}>
                {this.state.fullname}
              </h1>
            </div>

            <div className="col-md-6  ">
              <div className="signup-card">
                <div className="card  mb-3 shadow ">
                  <div className="card-body text-dark ">
                    <h5 className="card-title text-dark">Hotel-on-points</h5>
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
                        {errors && 
                        errors.fullName ? (<small className='text-danger'>{errors.fullName}</small>) : null}
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
                        {errors && errors.email ? (<small className='text-danger'>{errors.email}</small>) : null}
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
                        {errors && errors.password ? (<small className='text-danger'>{errors.password}</small>) : null}
                      </div>

                      <div className="form-group">
                        <Input
                          type="password"
                          name="confirmpassword"
                          value={this.state.confirmpassword}
                          onChange={this.handleForm}
                          className="form-control"
                          placeholder="Enter your password again"
                          Label="Confirm Password:"
                        />
                        {errors && errors.confirmPassword ? (<small className='text-danger'>{errors.password}</small>) : null}
                      </div>
                      <button
                        type="submit"
                        onClick={this.handlesubmit}
                        variant="contained"
                        color="primary"
                        className="btn btn-block btin"
                        disabled={loading}
                      >
                        Sign Up
                        {loading && <CircularProgress size={30} />}
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 text-white d-none d-lg-block"
              style={{ letterSpacing: 3, lineHeight: 5 }}
            >
              <h1 style={{ fontWeight: 40 }}>
                {" "}
                <span style={{ color: "gold" }}>W</span>elcome{" "}
                <span style={{ color: "gold" }}>.</span>
              </h1>
              <h1 style={{ textTransform: "capitalize" }}>
                {this.state.fullname}
              </h1>
              <h1>Finish filling the form</h1>
              <h1>To unlock Great Deals</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  signupUser,
  getUser
};

export default connect(mapStateToProps, mapActionsToProps)(SignUp);
