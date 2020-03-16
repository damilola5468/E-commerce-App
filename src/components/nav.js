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
// import "./style.css";
class Navigator extends Component {
  logOut() {
    localStorage.removeItem("x-access-token");
    window.location = "/";
  }

  render() {
    const auth = isAuthenticated();
    return (
      <div class="">
        <Navbar
          collapseOnSelect
          className="fixed-top"
          expand="lg"
          style={nav}
          variant="dark"
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            {/* <Navbar.Brand href="#home" style={all} className="text-dark "> */}
            <Nav className="ml-3 mt-2">
              {/* <FaCannabis /> */}
              <h1
                class="link mt-1"
                style={{
                  fontFamily: "Work sans,San serif",
                  fontSize: "39px",
                  textDecoration: "none"
                }}
              >
                <b style={{ fontSize: "29px" }}>Switch's</b>
              </h1>
            </Nav>
            {/* </Navbar.Brand> */}
          </Link>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            children={
              <b
                style={{
                  fontFamily: "Work sans,San serif",
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
                href="/market"
                style={io}
                className="text-dark mt-4"
              >
                <h4 className="lin ">
                  <b>Market</b>
                </h4>
              </Nav.Link>
              <Nav.Link href="/cart" style={io} className="text-dark  mt-4">
                <h4 className="lin">
                  <b>Cart </b>&nbsp;
                </h4>
              </Nav.Link>

              <Nav.Link href="/checkout" style={io} className="text-dark mt-4">
                <h4 className="lin">
                  <b>Checkout</b>
                </h4>{" "}
                &nbsp;
              </Nav.Link>

              {!auth ? (
                <Nav.Link
                  eventKey={2}
                  href="/login"
                  style={io}
                  className="text-dark mt-4"
                >
                  <h4 className="lin">
                    <b>Login</b>
                  </h4>{" "}
                  &nbsp;
                </Nav.Link>
              ) : (
                <Nav.Link
                  eventKey={2}
                  onClick={this.logOut}
                  style={io}
                  className="text-dark mt-4"
                >
                  <b className="lin">
                    <h4>
                      <b>Logout</b>
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
  fontSize: "11px"
};

var col = {
  color: "black",
  fontSize: "9px",
  padding: "10px"
};

var nav = {
  backgroundColor: "#ffffff"
};
var img = {
  width: "180px"
  // marginBottom: "10px"
};
var ju = {
  fontSize: "20px"
};
var ok = {
  fontSize: "30px",
  textDecoration: "none"
};
export default Navigator;
