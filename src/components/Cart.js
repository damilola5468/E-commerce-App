import React from "react";
import { Link } from "react-router-dom";
import { getCartProducts } from "../repository";
import CartItem from "./CartItem";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
import {
  FaCartArrowDown,
  FaUserPlus,
  FaBars,
  FaCheckSquare,
  FaStore,
  FaSeedling,
  FaSearch,
  FaLock
} from "react-icons/fa";
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0
    };
  }

  componentWillMount() {
    let cart = localStorage.getItem("cart");
    console.log(cart);
    if (!cart) return;
    getCartProducts(cart).then(products => {
      let total = 0;
      for (var i = 0; i < products.length; i++) {
        total += products[i].price * products[i].qty;
      }
      this.setState({ products, total });
    });
  }

  removeFromCart = product => {
    swal("Are You sure you want to remove product?", {
      buttons: {
        cancel: "default",
        ok: {
          text: "Remove",
          value: "ok"
        },
        cancel: true
      }
    }).then(value => {
      switch (value) {
        case "ok":
          let products = this.state.products.filter(
            item => item.id !== product.id
          );
          let cart = JSON.parse(localStorage.getItem("cart"));
          delete cart[product.id.toString()];
          localStorage.setItem("cart", JSON.stringify(cart));
          let total = this.state.total - product.qty * product.price;
          this.setState({ products, total });
          swal("Product has been removed!");
          break;

        default:
          swal("Your Products Are Safe!!", "", "success");
          break;
      }
    });
  };

  clearCart = () => {
    localStorage.removeItem("cart");
    this.setState({ products: [] });
    swal("Your Cart Has Been Cleared!!!", "", "success");
  };

  render() {
    const { products, total } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div style={nav}></div>
        <div class="container mt-5 ">
          <div class="row" id="products">
            {products.map((product, index) => (
              <CartItem
                product={product}
                remove={this.removeFromCart}
                key={index}
              />
            ))}
          </div>

          <div class="container">
            {products.length ? (
              <div>
                <h5 class="text-dark" style={{ fontSize: "20px" }}>
                  <b>Total Amount:</b>
                  <span
                    className="float-right text-dark"
                    style={{ fontSize: "21px" }}
                  >
                    <b> ₦{total}</b>
                  </span>
                </h5>
                <hr />
              </div>
            ) : (
              ""
            )}

            {!products.length ? (
              <h3 className="text-dark">
                <b>No item on the cart!!!</b>
              </h3>
            ) : (
              ""
            )}
            <Link to="/checkout">
              <button className="btn btn-sm btn-outline-secondary float-right">
                Checkout
              </button>
            </Link>
            <button
              className="btn btn-outline-secondary btn-sm float-left"
              onClick={this.clearCart}
              style={{ marginRight: "10px" }}
            >
              Clear Cart
            </button>
            <br />

            <br />
            <br />
          </div>
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
  fontSize: "21px"
};
