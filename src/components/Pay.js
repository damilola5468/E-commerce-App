import React from "react";
import { isAuthenticated, userpay, Order_1 } from "../repository";
import { Card, Accordion, useAccordionToggle,Carousel } from "react-bootstrap/";
import { Redirect, Link } from "react-router-dom";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  InputGroup,
  Col
} from "react-bootstrap/";
import {
  FaCartArrowDown,
  FaUserPlus,
  FaBars,
  FaCheckSquare,
  FaStore,
  FaSeedling,
  FaSearch,
  FaLock,
  FaArchive,
  FaCarSide,
    FaDoorClosed
} from "react-icons/fa";
import "./style.css";
import Pagination from './pagination';

export default class Pay extends React.Component {
  constructor() {
    super();
    this.state = {
      id:"",
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      phone2: "",
      address: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }



  componentDidMount() {
  let user = localStorage.getItem("user");

userpay(user)
.then(res=> {
      this.setState({ id: res[0].id });
    this.setState({ firstname: res[0].firstname });
    this.setState({ lastname: res[0].lastname });
    this.setState({ phone: res[0].phone });
    this.setState({ email: res[0].email });
    this.setState({ address: res[0].address });


  });


}

  submitUpdate(event) {
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
    } else {

    Order_1(this.state)
          .then(res => swal(res, "Proceed to final Step", "success"))
          .catch(err => swal(err, "Error Occured", "error"));
    }
  }

  render() {
    const { s_user } = this.state;
    if (!isAuthenticated()) return <Redirect to="/login" />;
    return (
      <div>

      <br />
      <br />
      <br />
      <div className="container  mb-5">
        <h5 style={mn} className="ml-4 rer">
          Delivery Information &nbsp;
        </h5>
        <hr />
        <div className="col-sm-8 col-sm-offset-2">
          <div className="panel panel-primary">
            <div className="panel-heading"></div>
            <div className="panel-body">
              <form onSubmit={this.submitUpdate}>
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
                        value={this.state.firstname}
                        readonly="readonly"
                      />
                    </div>
                  </div>

                  <input
                    type="hidden"
                    className="form-control rer"
                    name="firstname"
                    onChange={this.handleInputChange}
                    value={this.state.id}
                    readonly="readonly"
                  />

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
                        value={this.state.lastname}
                          readonly="readonly"
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
                        value={this.state.email}
                          readonly="readonly"
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
                        value={this.state.phone}
                          readonly="readonly"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    {" "}
                    <div className="form-group">
                      <label>
                        <h5 className="rer">Phone 2:</h5>
                      </label>
                      <input
                        type="text"
                        className="form-control rer"
                        name="phone2"
                        value={this.state.phone2}
                        onChange={this.handleInputChange}
                        placeholder="*Optional Field*"
                      />
                    </div>
                  </div>

                  <div class="col-md-8">
                    {" "}
                    <div className="form-group">
                      <label>
                        <h5 className="rer">Delivery Address:</h5>
                      </label>

                      <input
                        type="text"
                        className="form-control rer"
                        name="address"
                        onChange={this.handleInputChange}
                        value={this.state.address}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className=" rer btn btn-sm btn-outline-secondary"
                >
                Update
                </button>

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

var uyh = {
  marginTop: "6px",
  width: "40px"
};
var uyw = {
  marginTop: "6px",
  // textAlign:"center",
  fontSize: "15px"
};


var nav = {
  backgroundColor: "#f7f7fde0",
  height: "40px"
};
var img = {

};
var lp = {
  fontSize: "25px"
};

var rt = {
  fontSize: "17px"
};

var fv = {
  fontSize: "12px"
};
