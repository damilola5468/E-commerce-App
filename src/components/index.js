import React from "react";
import ProductItem from "./ProductItem";
import {
  getProducts,
  product,
  category,
  getCategoryProduct
} from "../repository";
import Spinner from "react-bootstrap/Spinner";
import {
  FaArrowAltCircleDown,
  FaSearch,
  FaServicestack,
  FaBars
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Carosel from "../components/carosel";
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
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loader: false,
      category: []
    };
    this.onchange = this.onchange.bind(this);
  }

  componentWillMount() {
    getProducts().then(products => {
      this.setState({ products });
    });

    category().then(category => {
      this.setState({ category });
      console.log(this.state.category);
    });
  }

  handleClick = ev => {
    ev.preventDefault();
    getCategoryProduct(ev.currentTarget.value).then(products => {
      this.setState({ products });
      console.log(product);
    });
  };
  onchange(event) {
    event.preventDefault();
    if (event.target.value) {
      let product_name = event.target.value;
      product(product_name).then(products => {
        this.setState({ products });
      });
    } else {
      getProducts().then(products => {
        this.setState({ products });
      });
    }
  }

  render() {
    const { products } = this.state;
    const { category } = this.state;
    return (
      <div className="mt-0">
        <br />
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Navbar
                  collapseOnSelect
                  className=" "
                  expand="lg"
                  variant="dark"
                >
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-5">
                      {category.map((category, index) => (
                        <button
                          onClick={this.handleClick}
                          value={category.id}
                          style={btu}
                        >
                          <h2 class=" ml-3" style={{ fontSize: "16px" }}></h2>
                        </button>
                      ))}
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
        <Carosel />
      </div>
    );
  }
}
var img = {
  width: "200px",
  height: "150px",
  marginTop: "9px",
  borderRadius: "5px"
};

var col = {
  backgroundColor: "#eef9"
};

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log(eventKey)
  );

  return (
    <h4 class="text-center">
      <button
        type="submit"
        style={{
          backgroundColor: "transparent",
          textAlign: "center",
          border: "0px",
          outline: "none"
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    </h4>
  );
}

var io = {
  paddingLeft: "15px"
};

var col = {
  color: "black",
  fontSize: "9px",
  padding: "10px"
};

var er = {};

var nav = {
  backgroundColor: "#f7f7fde0",
  height: "30px"
};
var img = {
  width: "180px"
  // marginBottom: "10px"
};
var ui = {
  fontSize: "20px"
};
var ju = {
  fontSize: "25px"
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
var btu = {
  border: "none",
  borderColor: "none",
  backgroundColor: "transparent",
  textAlign: "left",
  marginBottom: "10px"
};
var sio = {
  alignContent: "left"
};
