import React from "react";
import { isAuthenticated, getCartProducts } from "../repository";
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
  FaArchive
} from "react-icons/fa";
import "./style.css";
import Pagination from './pagination';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0,
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
         // update state with new page of items
         this.setState({ pageOfItems: pageOfItems });

     }



  componentWillMount() {
    let cart = localStorage.getItem("cart");
    if (!cart) return;
    getCartProducts(cart).then(products => {
      let total = 0;
      for (var i = 0; i < products.length; i++) {
          let rt = parseInt(products[i].qty.split("-")[0]);
        total += products[i].price * rt ;
      }
      this.setState({ products, total });
    });
  }

  render() {
      const {pageOfItems } = this.state;
    if (!isAuthenticated()) return <Redirect to="/login" />;
    const { products, total } = this.state;
    return (
      <div>



        <br />
        <br />
        <br />
        <div className=" container ">
          <div className="row">
            {pageOfItems.map((product, index) => (
              <div className="col-md-2 card-item mb-5 rft2">
                <Card class="card" >

                  <Carousel controls={true} indicators={false} interval={false} pause={true} slide={true} fade={false} >
                    <Carousel.Item>
                      <div className="container hov3 hovc">
                      <h4 class="text-center">
                        {" "}
                        <img
                          className="image-responsive hov3 hovc"
                          src={require(`${product.image_path}`)}
                          alt="img"
                        />
                      </h4>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="container hov3 hovc">
                      <h4 class="text-center">
                        {" "}
                        <img
                          className="image-responsive hov3 hovc"
                          src={require(`${product.image_path_2}`)}
                          alt="img"
                        />
                      </h4>
                      </div>
                    </Carousel.Item>
                  </Carousel>


                  <Card.Body>
                    <h4
                      class="text-dark text-center rtt"
                      style={{
                        fontSize: "18px",
                        fontFamily: "noir"
                      }}
                    >
                      <b style={{
                        fontSize: "15px",
                        fontFamily: "noir"
                      }}> {product.name} <span class="badge badge-secondary">{product.qty.split("-")[1]}</span></b>
                    </h4>

                    <hr />

                    <h5
                      class="text-dark text-center "
                      style={{
                        fontSize: "17px",
                        fontFamily: "noir"
                      }}
                    >
                      {product.available_quantity > 0 ? (
                        <div>
                          {/* <input
                  type="number"
                  value={this.state.quantity}
                  name="quantity"
                  onChange={this.handleInputChange}
                  className="float-right form-control"
                  style={{
                    fontWeight: "bold",
                    width: "60px",
                    height: "30px",
                    marginRight: "0px",
                    borderRadius: "3px",
                    marginTop: "7px"
                  }}
                /> */}
                          {/* <h5
                  class="text-dark text-center"
                  style={{ fontSize: "14px" }}
                >
                  {" "}
                  <span class="badge badge-secondary">
                    {" "}
                    {product.available_quantity}
                  </span>{" "}
                  Item Available
                </h5> */}
                        </div>
                      ) : (
                        <p
                          className="text-danger"
                          style={{
                            fontSize: "18px",
                            fontFamily: "noir"
                          }}
                        ></p>
                      )}
                    </h5>
                    {/* <hr /> */}

                    <h5
                      class=" rer text-dark text-center mt-4"
                      style={{
                        fontSize: "15px",
                        fontFamily: "noir"
                      }}
                    >
                      ₦{product.price}
                    </h5>

                    <h5 className="card-text text-center" style={fv}>
                      <span className="card-text text-secondary fv">
                        Quantity:&nbsp;
                        <span class="badge badge-secondary"   style={{
                            fontSize: "12px",
                            fontFamily: "noir"
                          }}>
                          {" "}
                          {product.qty.split("-")[0]}
                        </span>
                      </span>
                    </h5>



                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          <Pagination items={this.state.products} onChangePage={this.onChangePage} />

          <div class="container">
            {products.length ? (
              <div>
                <h4 style={rt}>
                  <b className="rer">Total Amount:</b>
                  <span className="float-right text-dark">
                    <b className="rer">₦{total}</b>
                  </span>
                </h4>
                <hr />
              </div>
            ) : (
              ""
            )}
            {!products.length ? (
              <h3 className="text-dark">
                <b className="rer">No item to Checkout</b>
                <hr/>
              </h3>
            ) : (
              ""
            )}
            {products.length ? (
              <Link to="/pay">
              <button
                className="rer btn btn-sm btn-outline-secondary float-right">

                Pay

              </button>
              </Link>
            ) : (
              ""
            )}
            <Link to="/">
              <button
                className=" rer btn btn-outline-secondary btn-sm float-right"
                style={{ marginRight: "10px" }}
              >
                Cancel
              </button>
            </Link>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}


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
  fontSize: "14px"
};
