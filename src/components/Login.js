import React from "react";
import { login } from "../repository";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSignInAlt, FaLock, FaKey } from "react-icons/fa";
import {
  Card,
  Accordion,
  useAccordionToggle,
  Navbar,
  Nav,
  Form,
  InputGroup,
  Col
} from "react-bootstrap/";
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitLogin(event) {
    event.preventDefault();
    login(this.state)
      .then(token => (window.location = "/market"))
      .catch(err => swal(err, "Error Occured", "error"));
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div style={nav}></div>
        <div className="container mt-4 mb-5">
          <h5 style={mn} className="ml-4">
            &nbsp; Login &nbsp; <FaLock />
          </h5>
          <hr />
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-primary">
              <div className="panel-heading"></div>
              <div className="panel-body">
                <form onSubmit={this.submitLogin}>
                  <div class="col-md-8">
                    <div className="form-group">
                      <label>
                        <h5>Email:</h5>
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div class="col-md-8">
                    {" "}
                    <div className="form-group">
                      <label>
                        <h5>Password:</h5>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-sm btn-outline-secondary ml-3"
                  >
                    <b>Login</b>
                  </button>

                  <a
                    href="/signup"
                    class="btn mt-3 ml-4 btn-sm btn-outline-secondary"
                  >
                    <b>Signup</b>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
var mn = {
  fontSize: "20px",
  marginLeft: "20px"
};

var nav = {
  backgroundColor: "#f7f7fde0",
  width: "100%",
  height: "15px"
};
