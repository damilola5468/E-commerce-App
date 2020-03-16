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
import {
  FaArrowAltCircleDown,
  FaSearch,
  FaServicestack,
  FaBars,
  FaThumbsUp
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <div className="App">
        <Navbar collapseOnSelect expand="w-100" style={nav} variant="dark">
          <div className="container">
            <div className="row mt-4 mb-5">
              <div className="col-md-4 mt-4">
                <b>Quick Links</b>
                <br />
                <br />
                <a
                  href="/cart"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Cart
                </a>
                <br />
                <a
                  href="/market"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Market
                </a>
                <br />
                <a
                  href="/login"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Login
                </a>
              </div>
              <div className="col-md-4 mt-4">
                <b>Talk About Your Bussiness</b>
                <br />
                <br />
                Share store details, promotions, or brand content with your
                customers.
              </div>
              <div className="col-md-4">
                <br />
                <b className="">NewsLetter</b>
                <br />

                <Form.Group as={Col} md="12" className="mt-4">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FaThumbsUp style={{ color: "#fdfdfe" }} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="Subscribe to Our Newsletter"
                      aria-describedby="inputGroupAppend"
                      onChange={this.onchange}
                      class="w-100 mt-5"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </div>
            </div>
          </div>
          {/* <h6 className="p-2 mt-2">AgroBased Nigeria © 2020</h6> */}
        </Navbar>
      </div>
    );
  }
}

var nav = {
  backgroundColor: "#f7f7fde0",
  color: "black"
};

export default Footer;
