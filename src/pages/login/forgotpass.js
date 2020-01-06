import "react-toastify/dist/ReactToastify.css";
import "./login.css";

import { getUser, validateUser } from "../../redux/actions/userActions";

import CircularProgress from "@material-ui/core/CircularProgress";
import { Input } from "../../components/inputs/input1";
import { Link } from 'react-router-dom';
import React from "react";
import { ToastContainer } from "react-toastify";
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

class FORGOTPASS extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }

  handleForm = event => {
    console.log(this.state);
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlesubmit = event => {
  
    event.preventDefault();
    console.log(this.state);
    const data = {
      email: this.state.email
    };

    this.props.validateUser(data);
  };

  render() {
    const {
      UI: { loading, errors, message }
    } = this.props;
    return (
      <div style={sectionStyle}>
        <div className="container mt-3 mb-3">
          <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4 ">
              <div className="card  mb-3 shadow login-card">
                <div className="card-body text-dark ">
                  <div>
                    {/* <h5 className="card-title text-dark text-center">
                      Hotel-on-points
                    </h5> */}
                    <h5 className="card-title text-dark text-center">
                      Confirm your email
                    </h5>
                    <div className="form-group">
                    {message && message ? (
                    <div class="alert alert-success" role="alert">
                      <p>{message}...</p>
                    </div>
                      ) : null}
                      <Input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleForm}
                        className="form-control"
                        placeholder="Enter Username"
                      />
                      {errors && errors.message ? (
                    <div class="alert alert-danger" role="alert">
                      <p>{errors.message}...</p><Link to='/signup'>Here</Link>
                    </div>
                      ) : null}
                    </div>

                    <button
                      type="submit"
                      onClick={this.handlesubmit}
                      variant="contained"
                      color="primary"
                      className="btn btn-block btin"
                      disabled={loading}
                    >
                      Confirm
                      {loading && <CircularProgress size={30} />}
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
  validateUser,
  getUser
};

export default connect(mapStateToProps, mapActionsToProps)(FORGOTPASS);
