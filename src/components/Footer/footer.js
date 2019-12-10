import "./footer.css";

import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <div className=" footer-back mt-3">
      <div className="p-3">
        <div className="row ">
          <div className="col-md-4">
            <h3 className="logo">HOTEL-ON-POINTS</h3>
          </div>

          <div className="col-md-4">
            <label className="label text-center">
              Subscribe to get the latest of deals
            </label>
            <div class="input-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="youremail@example.com"
              />
              <div class="input-group-append">
                <input
                  type="submit"
                  className=" d-inline btn btn-sm btn-light"
                  value="subscribe"
                />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="mt-4">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-light">
          <div className="row">
            <div className="col-4">
              <h5>Contact us:</h5>
              <p>
                Website Feedback
                <br />
                Whatsapp
                <br />
                phone No
              </p>
            </div>
            <div className="col-4">
              <h5>Get to know us:</h5>
              <p>
                About us
                <br />
                Privacy policy
                <br />
                Term of use
                <br />
                Pament policy
                <br />
                Career
                <br />
                FAQ
              </p>
            </div>
            <div className="col-4">
              <h5>Other services:</h5>
              <p>
                List your property
                <br />
                Become an agent
                <br />
                How it works
                <br />
                Visa Assistance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-5"></div>
    </div>
  );
}

export default Footer;
