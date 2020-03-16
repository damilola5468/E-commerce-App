import React from "react";
import swal from "sweetalert";
import { FaCartPlus, FaUserPlus, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card, Accordion, useAccordionToggle } from "react-bootstrap/";
import cer from "./image/apple.jpg";
import "./style.css";

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  handleInputChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  addToCart = () => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};

    let id = this.props.product.id.toString();
    cart[id] = cart[id] ? cart[id] : 0;
    let qty = cart[id] + parseInt(this.state.quantity);
    // alert(qty);
    // alert(cart[id]);
    if (this.props.product.available_quantity < qty) {
      swal(
        "Not Enough Item",
        "We Don't Have Enough Of this Product Available!!",
        "error"
      );
    } else {
      cart[id] = qty;
      swal("Added To Cart!", "Prooduct Added To Cart!", "success");
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  render() {
    const { product } = this.props;

    return (
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
                fontSize: "17px",
                fontFamily: "Work sans,San serif",
                textTransform: "capitalize"
              }}
            >
              <b> {product.name}</b>
            </h4>

            <hr />

            <h5
              class="text-dark text-center "
              style={{ fontSize: "17px", fontFamily: "Work sans,San serif" }}
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
              style={{ fontSize: "16px", fontFamily: "Work sans,San serif" }}
            >
              ₦{product.price}
            </h5>

            {product.available_quantity > 0 ? (
              <h4 class="text-dark text-center">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={this.addToCart}
                >
                  Add To Cart
                </button>
              </h4>
            ) : (
              <h4 class="text-dark text-center">
                <button className="btn btn-outline-secondary btn-sm disabled">
                  Out of Stock
                </button>
              </h4>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

var img = {
  width: "170px",
  height: "140px",
  marginTop: "29px"
};

var col = {
  backgroundColor: "#eef"
};
