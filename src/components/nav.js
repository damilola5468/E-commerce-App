import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  InputGroup,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";
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
  FaCannabis
} from "react-icons/fa";
import { isAuthenticated } from "../repository";
import "./footer.css";
class Navigator extends Component {
  state = {
    cart_total: ""
  };

  componentWillMount() {
    // let cart = localStorage.getItem("cart");
    //
    //   let total = cart.split(":").length -1;
    //   this.setState({ cart_total:total });
  }

  logOut() {
    localStorage.removeItem("x-access-token");
    window.location = "/";
  }

  render() {
    const auth = isAuthenticated();
    return (
      <div className="gyu">
        <Navbar
          collapseOnSelect
          className=""
          expand="lg"
          style={nav}
          variant="dark"
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Nav className="lt mt-2">
              <h1
                class="link mt-1"
                style={{
                  fontFamily: "noir",
                  fontSize: "39px",
                  textDecoration: "none"
                }}
              >
                <b style={{ fontSize: "20px" }}>BH Couture</b>
              </h1>
            </Nav>
          </Link>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            children={
              <b
                style={{
                  fontFamily: "noir",
                  fontSize: "29px"
                }}
              >
                <FaBars />
              </b>
            }
            style={col}
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>

            <Nav className="ml-0">
              <Nav.Link
                eventKey={2}
                href="/"
                style={io}
                className="text-dark jj "
              >
                <h4 className="lin ">
                  <b className="lin">Market</b>
                </h4>
              </Nav.Link>
              <Nav.Link href="/cart" style={io} className="text-dark jj  ">
                <h4 className="lin">
                  <b className="lin">Cart </b>&nbsp;
                </h4>
              </Nav.Link>

              <Nav.Link href="/checkout" style={io} className="text-dark jj">
                <h4 className="lin" id="hod">
                  <b className="lin">Checkout</b>
                </h4>{" "}
                &nbsp;
              </Nav.Link>

              {!auth ? (
                <Nav.Link
                  eventKey={2}
                  href="/login"
                  style={io}
                  className="text-dark jj jkl"
                >
                  <h4 className="lin">
                    <b className="lin">Login</b>
                  </h4>{" "}
                  &nbsp;
                </Nav.Link>
              ) : (
                <Nav.Link
                  eventKey={2}
                  onClick={this.logOut}
                  style={io}
                  className="text-dark jj"
                >
                  <b className="lin">
                    <h4>
                      <b className="lin">Logout</b>
                    </h4>
                  </b>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

var io = {
  paddingLeft: "15px",
  fontSize: "16px"
};

var col = {
  color: "black",
  fontSize: "9px",
  padding: "10px"
};

var nav = {
  backgroundColor: "#f0f0f8ec"
};
var img = {
  width: "180px"
};
var ju = {
  fontSize: "20px"
};
var ok = {
  fontSize: "30px",
  textDecoration: "none"
};

export default Navigator;
