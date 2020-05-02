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
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="App gyu">
        <Navbar collapseOnSelect  style={nav} variant="dark">
          <div className="container ito ">
            <div className="row mt-4  ">
              <div className="col-md-3 mt-4 ">
                <b className="yuh"   style={{ color: "black", textDecoration: "none", fontSize:"17px" }}>Quick Links</b>
                <br />
                <br />
                <a
                className="yuh"
                  href="/cart"
                  style={{ color: "black", textDecoration: "none", fontSize:"16px" }}
                >
                  Cart
                </a>
                <br />
                <a
                className="yuh"
                  href="/market"
                  style={{ color: "black", textDecoration: "none", fontSize:"16px" }}
                >
                  Market
                </a>
                <br />
                <a
                className="yuh"
                  href="/login"
                  style={{ color: "black", textDecoration: "none", fontSize:"16px" }}
                >
                  Login
                </a>
              </div>
              <div className="col-md-5 mt-4 iuy">
                <b className="yuh "   style={{ color: "black", textDecoration: "none", fontSize:"17px" }}>Talk About Your Bussiness</b>
                <br />
                <br />
                <h5 className="yuh"   style={{ color: "black", textDecoration: "none", fontSize:"16px" }}>Share store details, promotions, or brand content with your
                customers.</h5>
              </div>
              <div className="col-md-4 iuy">
                <br />
                <b className="yuh ioo"   style={{ color: "black", textDecoration: "none", fontSize:"17px" }}>NewsLetter</b>
                <br />

                <Form.Group as={Col} md="12" className="mt-4 ioo">
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
                      class=" mt-5 iuy rer2"
                      style={{fontSize:"13px",width:"100%"}}
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
