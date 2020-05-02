import React from "react";
import { login, Signup, Check } from "../repository";
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
    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      phone: "",
      address: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  Checksign() {
    Check(this.state).then(msg => swal(msg, "Error Occured", "error"));
  }

  submitSignup(event) {
    event.preventDefault();
    if (this.state.firstname === "") {
      swal("Empty Firstname", "Error Occured", "error");
    } else if (this.state.lastname === "") {
      swal("Empty Lastname", "Error Occured", "error");
    } else if (this.state.email === "") {
      swal("Empty Email", "Error Occured", "error");
    } else if (this.state.phone === "") {
      swal("Empty Phone", "Error Occured", "error");
    } else if (this.state.address === "") {
      swal("Empty Address", "Error Occured", "error");
    } else if (this.state.password === "") {
      swal("Empty Password", "Error Occured", "error");
    } else {
      Check(this.state).then(msg => swal(msg, "", "info"));
      //   Signup(this.state)
      //     .then(token => (window.location = "/market"))
      //     .catch(err => swal(err, "Error Occured", "error"));
    }
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />

        <div className="container  mb-5">
          <h5 style={mn} className="ml-4 rer">
            Signup &nbsp; <FaLock />
          </h5>
          <hr />
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-primary">
              <div className="panel-heading"></div>
              <div className="panel-body">
                <form onSubmit={this.submitSignup}>
                  <div class="row">
                    <div class="col-md-6">
                      <div className="form-group">
                        <label>
                          <h5 className="rer">Firstname:</h5>
                        </label>

                        <input
                          type="text"
                          className="form-control rer"
                          name="firstname"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div className="form-group">
                        <label>
                          <h5 className="rer">Lastname:</h5>
                        </label>

                        <input
                          type="text"
                          className="form-control rer"
                          name="lastname"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-8">
                      {" "}
                      <div className="form-group">
                        <label>
                          <h5 className="rer">Email:</h5>
                        </label>

                        <input
                          type="text"
                          className="form-control rer"
                          name="email"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      {" "}
                      <div className="form-group">
                        <label>
                          <h5 className="rer">Phone:</h5>
                        </label>

                        <input
                          type="text"
                          className="form-control rer"
                          name="phone"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-4">
                      {" "}
                      <div className="form-group">
                        <label>
                          <h5 className="rer">Password:</h5>
                        </label>
                        <input
                          type="password"
                          className="form-control rer"
                          name="password"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div class="col-md-8">
                      {" "}
                      <div className="form-group">
                        <label>
                          <h5 className="rer">Address:</h5>
                        </label>

                        <input
                          type="text"
                          className="form-control rer"
                          name="address"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className=" rer btn btn-sm btn-outline-secondary"
                  >
                    Signup
                  </button>
                  <a
                    href="/login"
                    class=" rer btn mt-4 ml-4 btn-sm btn-outline-secondary"
                  >
                    Login
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
  fontSize: "20px"
};

var nav = {
  backgroundColor: "#f7f7fde0",
  width: "100%",
  height: "15px"
};
