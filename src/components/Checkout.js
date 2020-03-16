import React from "react";
import { isAuthenticated, getCartProducts } from "../repository";
import { Card, Accordion, useAccordionToggle } from "react-bootstrap/";
import { Redirect, Link } from "react-router-dom";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
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
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0
    };
  }

  componentWillMount() {
    let cart = localStorage.getItem("cart");
    if (!cart) return;
    getCartProducts(cart).then(products => {
      let total = 0;
      for (var i = 0; i < products.length; i++) {
        total += products[i].price * products[i].qty;
      }
      this.setState({ products, total });
    });
  }

  render() {
    if (!isAuthenticated()) return <Redirect to="/login" />;
    const { products, total } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div style={nav}></div>
        <div className=" container mt-4" style={{ padding: "20px" }}>
          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-3 mb-5">
                <Card>
                  {/* <Card.Header style={{ backgroundColor: "#fdfdf9" }}> */}
                  <h4 class="text-center">
                    {" "}
                    {/* <img
            className="image-responsive hov"
            style={img}
            src={require(`${product.image_path}`)}
            alt="img"
          /> */}
                  </h4>
                  {/* </Card.Header> */}

                  <Card.Body>
                    <h4
                      class="text-dark text-center rtt"
                      style={{
                        fontSize: "18px",
                        fontFamily: "Work sans,San serif"
                      }}
                    >
                      <b> {product.name}</b>
                    </h4>

                    <hr />

                    <h5
                      class="text-dark text-center "
                      style={{
                        fontSize: "17px",
                        fontFamily: "Work sans,San serif"
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
                            fontFamily: "Work sans,San serif"
                          }}
                        ></p>
                      )}
                    </h5>
                    {/* <hr /> */}

                    <h5
                      class="text-dark text-center"
                      style={{
                        fontSize: "16px",
                        fontFamily: "Work sans,San serif"
                      }}
                    >
                      ₦{product.price}
                    </h5>

                    <h5 className="card-text text-center" style={fv}>
                      <span className="card-text text-secondary fv">
                        Quantity:&nbsp;
                        <span class="badge badge-secondary">
                          {" "}
                          {product.qty}
                        </span>
                      </span>
                    </h5>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          {products.length ? (
            <div>
              <h4 style={rt}>
                <b>Total Amount:</b>
                <span className="float-right text-dark">
                  <b>₦{total}</b>
                </span>
              </h4>
              <hr />
            </div>
          ) : (
            ""
          )}
          {!products.length ? (
            <h3 className="text-dark">
              <b>No item to Checkout</b>
            </h3>
          ) : (
            ""
          )}
          {products.length ? (
            <button
              className="btn btn-sm btn-outline-secondary float-right"
              onClick={() => swal("Proceed to Pay")}
            >
              Pay
            </button>
          ) : (
            ""
          )}
          <Link to="/">
            <button
              className="btn btn-outline-secondary btn-sm float-right"
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
    );
  }
}
var nav = {
  backgroundColor: "#f7f7fde0",
  width: "100%",
  height: "65px"
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
