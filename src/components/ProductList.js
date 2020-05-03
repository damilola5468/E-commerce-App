import React from "react";
import ProductItem from "./ProductItem";
import swal from "sweetalert";
import {
  getProducts,
  product,
  category,
  getCategoryProduct,
  Type,
  getSubCat,
  getSubCatPro,
  getsubSubCat,
  getsubSubProduct,
  getallsubSubProduct
} from "../repository";
import Spinner from "react-bootstrap/Spinner";

import {
  FaArrowAltCircleDown,
  FaSearch,
  FaServicestack,
  FaBars,
  FaStore,
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Card,
  Accordion,
  useAccordionToggle,
  Navbar,
  Nav,
  Form,
  InputGroup,
  Col,
  Carousel
} from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./footer.css";
import Pagination from "./pagination";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loader: false,
      category: null,
      od_car: null,
      cat2: null,
      cat_dr: "",
      cat2_dr: "none",
      search: false,
      searchtext: "",
      pageOfItems: [],
      currentPage: 1,
      productsPerPage: 8,
      type: [],
      subcart: [],
      dr: "none",
      mov1_dr: "none",
      mov2_dr: "",
      cat_color: "black",
      cat_id: "",
      subSubCat: [],
      dr2: "none",
      sububCat_id: "",
      new_id: "",
      dr4: "none",
      drt: ""
    };
    this.onchange = this.onchange.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getSubCart = this.getSubCart.bind(this);
    this.turnoff = this.turnoff.bind(this);
    this.turnoff2 = this.turnoff2.bind(this);

    this.fetchsubproduct = this.fetchsubproduct.bind(this);
    this.fetchsubsubCat = this.fetchsubsubCat.bind(this);
    this.fetchsububproduct = this.fetchsububproduct.bind(this);
    this.fetchallsububproduct = this.fetchallsububproduct.bind(this);
  }

  getSubCart(id) {
    this.setState({ cat_id: id });
    getSubCat(id)
      .then(subcart => {
        this.setState({ subcart });

        this.setState({ dr: "" });
        this.setState({ dr2: "none" });
        console.log(subcart);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getCat(id) {
    this.setState({ cat_id: id });
    getCategoryProduct(id)
      .then(products => {
        this.setState({ products });

        // this.setState({ dr: "" });
        // this.setState({ dr2: "none" });
        // console.log(subcart);
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchsububproduct(id) {
    this.setState({ sububCat_id: id });
    console.log(id);
    getsubSubProduct(id)
      .then(products => {
        this.setState({ products });
        this.setState({ dr2: "" });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchallsububproduct(id) {
    console.log(this.state.new_id);
    getallsubSubProduct(this.state.new_id)
      .then(products => {
        this.setState({ products });
        this.setState({ dr2: "" });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchsubsubCat(id) {
    this.setState({ new_id: id });
    getsubSubCat(id)
      .then(subSubCat => {
        this.setState({ subSubCat });
        this.setState({ dr2: "" });
        console.log(subSubCat);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClick2(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  turnoff(event) {
    this.setState({
      dr: "none"
    });
  }

  turnoff2(event) {
    this.setState({
      dr2: "none"
    });
  }

  fetchsubproduct(id) {
    getSubCatPro(id).then(products => {
      this.setState({ products });
      this.setState({ dr: "" });
    });
  }
  fetchallsubsubpro(id) {}

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  componentWillMount() {
    getProducts().then(products => {
      this.setState({ products });
      this.setState({ dr: "none" });
    });

    Type().then(type => {
      this.setState({ type });
    });

    category().then(category => {
      let c_item = category.length;
      let tto = c_item / 2;
      if (c_item < 8) {
        let cat1 = category.splice(4);
        this.setState({ cat2: cat1 });
      } else {
        let cat1 = category.splice(4);
        this.setState({ cat2: cat1 });
      }

      if (c_item < 5) {
        this.setState({ mov2_dr: "none" });
      }

      // console.log(cat1);

      this.setState({ category });
      console.log(this.state.cat2);
    });
  }

  getall = () => {
    getProducts().then(products => {
      this.setState({ search: false });
      this.setState({ searchtext: "" });
      this.setState({ dr: "" });
      this.setState({ products });
    });
  };

  getall2 = () => {
    getProducts().then(products => {
      this.setState({ search: false });
      this.setState({ searchtext: "" });
      this.setState({ dr: "none" });
      this.setState({ products });
    });
  };

  handleClick = ev => {
    ev.preventDefault();
    getCategoryProduct(this.state.cat_id).then(products => {
      this.setState({ search: false });
      this.setState({ products });
      this.setState({ currentPage: 1 });
      this.setState({ dr: "none" });
      console.log(this.state.cat_id);
      // }
    });
  };

  // handleClickall = ev => {
  //   ev.preventDefault();
  //   getallsububproduct(this.state.sububCat_id).then(products => {
  //     if (products) {
  //       this.setState({ search: false });
  //       this.setState({ products });
  //       this.setState({ currentPage:1 });
  //       this.setState({ dr: "none" });
  //       // console.log(this.state.products);
  //     }
  //
  //   });
  // };

  onchange(event) {
    event.preventDefault();
    if (event.target.value) {
      let product_name = event.target.value;
      this.setState({ searchtext: event.target.value });
      product(product_name).then(products => {
        this.setState({ pageOfItems: [] });
        this.setState({ products });
        this.setState({ search: true });
      });
    } else {
      this.setState({ search: false });
      this.setState({ searchtext: "" });
      // window.location ="/";
      getProducts().then(products => {
        this.setState({ products });
        this.setState({ pageOfItems: [] });
      });
    }
  }

  render() {
    const { category } = this.state;
    const { search } = this.state;
    const { searchtext } = this.state;
    const {
      pageOfItems,
      type,
      subcart,
      dr,
      subSubCat,
      dr2,
      dr4,
      drt,
      cat2,
      cat_dr,
      cat2_dr,
      od_car,
      mov1_dr,
      mov2_dr
    } = this.state;

    const { products, currentPage, productsPerPage } = this.state;

    const rendersubcart = (
      <div id="edc">
        <Card class="card3" style={{ display: dr }}>
          <Card.Body>
            <p class="xer">
              <button class="btn btn-secondary btn-md" onClick={this.turnoff}>
                x
              </button>
            </p>

            {subcart.map((sub, index) => {
              return (
                <div>
                  <b style={{ fontSize: "13px" }}>
                    <button
                      class="btu iov"
                      style={{ height: "30px", width: "140px" }}
                      onClick={() => this.fetchsubsubCat(sub.id)}
                    >
                      {sub.sub_cat_name}&nbsp;
                      <FaCaretDown />
                    </button>
                  </b>
                </div>
              );
            })}
          </Card.Body>

          <div id="edc2">
            <Card class="card3" style={{ display: dr2 }}>
              <Card.Body>
                <p class="xer2">
                  <button
                    class="btn btn-secondary btn-md"
                    onClick={this.turnoff2}
                  >
                    x
                  </button>
                </p>
                <b style={{ fontSize: "13px" }}>
                  <button class="btu" onClick={this.fetchallsububproduct}>
                    All
                  </button>
                </b>

                {subSubCat.map((subsub, index) => {
                  return (
                    <div>
                      <b style={{ fontSize: "13px" }}>
                        <button
                          class="btu"
                          onClick={() => this.fetchsububproduct(subsub.id)}
                        >
                          {subsub.name}
                        </button>
                      </b>
                      <br />
                    </div>
                  );
                })}
              </Card.Body>
            </Card>
          </div>
        </Card>
      </div>
    );

    const indexOfLastproducts = currentPage * productsPerPage;
    const indexOfFirstproducts = indexOfLastproducts - productsPerPage;
    const currentproducts = products.slice(
      indexOfFirstproducts,
      indexOfLastproducts
    );

    const renderproducts = currentproducts.map(products => {
      return <ProductItem product={products} type={type} key={products.id} />;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="pager text-center btn btn-outline-secondary btn-sm"
          key={number}
          id={number}
          onClick={this.handleClick2}
        >
          {number}
        </li>
      );
    });
    return (
      <div className="">
        <br />
        <div class="gyu">
          <div class="uio nav">
            <div className="container mt-1 ">
              <div className="row">
                <div className="col-lg-7">
                  <Navbar
                    collapseOnSelect
                    className="navbar-expand mlp"
                    expand="lg"
                    variant="dark"
                  >
                    <Navbar.Toggle
                      aria-controls="responsive-navbar-nav"
                      children={
                        <p
                          className="eri"
                          style={{
                            fontFamily: "noir",
                            fontSize: "29px"
                          }}
                        >
                          <FaStore />
                        </p>
                      }
                      style={col}
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto"></Nav>

                      <Nav className=" mt-0">
                        <button onClick={this.getall2} class="btu">
                          <h2
                            class="nkk2"
                            style={{
                              fontSize: "20px",
                              fontFamily: "noir"
                            }}
                          >
                            <b class="ico">
                              <FaStore />{" "}
                            </b>
                            &nbsp; &nbsp; &nbsp;
                          </h2>
                        </button>

                        <button
                          onClick={() => {
                            this.setState({ mov1_dr: "none" });
                            this.setState({ mov2_dr: "" });
                            this.setState({ category: od_car });
                          }}
                          style={{}}
                          class="btu"
                        >
                          <h2
                            class="rtt  klk"
                            style={{
                              fontSize: "20px",
                              fontFamily: "noir",
                              display: mov1_dr
                            }}
                          >
                            <b class=" nkk">
                              {" "}
                              <FaCaretLeft />{" "}
                            </b>
                            &nbsp; &nbsp; &nbsp;
                          </h2>
                        </button>

                        {category == null ? (
                          <h2
                            class="rtt mt-3 "
                            style={{
                              fontSize: "16px",
                              fontFamily: "noir"
                            }}
                          >
                            <b class="rw">Loading Available Category!!! </b>
                            &nbsp; &nbsp; &nbsp;
                          </h2>
                        ) : (
                          category.map((category, index) => (
                            <div>
                              <button
                                onClick={() => this.getCat(category.id)}
                                style={{ color: this.state.cat_color }}
                                class="btu"
                              >
                                <h2
                                  class="rtt "
                                  style={{
                                    fontSize: "14px",
                                    fontFamily: "noir"
                                  }}
                                >
                                  <b class="rer" style={{ display: cat_dr }}>
                                    {category.category_name}&nbsp;{" "}
                                  </b>
                                  &nbsp; &nbsp; &nbsp;
                                </h2>
                              </button>
                            </div>
                          ))
                        )}

                        <button
                          onClick={() => {
                            this.setState({ od_car: category });
                            this.setState({ category: cat2 });
                            this.setState({ mov1_dr: "" });
                            this.setState({ mov2_dr: "none" });
                          }}
                          class="btu "
                        >
                          <h2
                            class="rtt  "
                            style={{
                              fontSize: "20px",
                              fontFamily: "noir",
                              display: mov2_dr
                            }}
                          >
                            <b class="ico kkk ">
                              {" "}
                              <FaCaretRight />{" "}
                            </b>
                            &nbsp; &nbsp;
                          </h2>
                        </button>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </div>

                <div className="col-lg-5 float-left mt-1">
                  <Form.Group as={Col} md="12" className="sio">
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text style={uyh} id="inputGroupPrepend">
                          <FaSearch style={{ color: "#fdfdfe" }} />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        placeholder="Enter a Product Name Here!"
                        aria-describedby="inputGroupPrepend"
                        onChange={this.onchange}
                        style={uyw}
                        class="sio ml-5 float-left"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </div>

        {rendersubcart}

        <div className="container mt-5 ">
          <div class="row">
            <p class="jwt"> </p>

            <div className="col-lg-12"></div>

            <div className="col-md-12 mt-4">
              {search === true ? (
                <h3
                  style={{ fontSize: "15px" }}
                  className="card-title mb-5 ml-5"
                >
                  <b class="jiot">
                    {products.length} Search Results for {searchtext}
                  </b>{" "}
                  :
                </h3>
              ) : (
                <h2></h2>
              )}
              {/* <hr /> */}
              <div class="row" style={{ display: drt }}>
                {renderproducts}
              </div>
              <ul id="page-numbers">{renderPageNumbers}</ul>
              {/*<Pagination items={this.state.products} onChangePage={this.onChangePage} /> */}
            </div>
          </div>
        </div>
        <div class="black"></div>
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
var img = {};
var io = {
  paddingLeft: "15px"
};

var col = {
  color: "black",
  fontSize: "9px",
  padding: "10px"
};

var er = {};

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
  marginTop: "7px",
  // textAlign:"center",
  fontSize: "13px",
  width: "20px",
  marginRight: "50px"
};

var sio = {
  alignContent: "left"
};
