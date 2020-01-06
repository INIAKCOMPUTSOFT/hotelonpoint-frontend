import "react-toastify/dist/ReactToastify.css";
import "./login.css";

import { getUser, updatePassword } from "../../redux/actions/userActions";

import CircularProgress from '@material-ui/core/CircularProgress';
import { Input } from "../../components/inputs/input1";
import React from "react";
import { ToastContainer } from 'react-toastify';
import background from "./bacground-pic/blue.jfif";
import { connect } from "react-redux";

//import {Link} from 'react-router-dom'

var sectionStyle = {
  width: "100%",
  height: "auto",
  padding: "10px",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover"
};

class PassVer extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      confirmPassword: ""
    };
  }

  handleForm = (event) => {
    console.log(this.state);
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handlesubmit = (event) => {
    const id = this.props.match.params.id
    event.preventDefault();
    console.log(this.state);
    const data = {
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    this.props.updatePassword(data, id)

  }

  render() {
    const { UI: { loading, errors } } = this.props;
    return (
      <div style={sectionStyle}>
        <div className="container mt-3 mb-3">
          <div className="row">
            <div className="col-md-4">
            </div>

            <div className="col-md-4 ">
              <div className="card  mb-3 shadow login-card">
                <div className="card-body text-dark ">
                  <div>
                    {/* <h5 className="card-title text-dark text-center">
                      Hotel-on-points
                    </h5> */}
                    <h5 className="card-title text-dark text-center">
                      Create new password
                    </h5>
                    <div className="form-group">
                      <Input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleForm}
                        className="form-control"
                        placeholder="Enter password"
                      />
  
                    </div>

                    <div className="form-group">
                      <Input
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleForm}
                        className="form-control"
                        placeholder="Confirm Password"
                        label="Confirm password"
                      />
                      {errors && errors.message ? (
                    <div class="alert alert-danger" role="alert">
                      <p>{errors.message}...</p>
                    </div>
                      ) : null}
  
                    </div>

                    <button type='submit' onClick={this.handlesubmit} variant='contained' color='primary' className="btn btn-block btin" disabled=  {loading}>Create Password Now
                      {loading && (
                        <CircularProgress size={30}  />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4"></div>
          </div>
          <ToastContainer />
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
  updatePassword,
  getUser
};

export default connect(mapStateToProps, mapActionsToProps)(PassVer);
