import React from "react";
import { Link } from "react-router-dom";
import { getCartProducts } from "../repository";
import CartItem from "./CartItem";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
import Pagination from "./pagination";
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
      total: 0,
      pageOfItems: [],
      qty: ""
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
        total += products[i].price * rt;
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
          let total =
            this.state.total -
            parseInt(product.qty.split("-")[0]) * product.price;
          this.setState({ products, total });

          swal("Product has been removed!");

          break;

        default:
          break;
      }
    });
  };

  addToCart = product => {
    let products = this.state.products.filter(item => item.id !== product.id);
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};

    let id = product.id.toString();
    cart[id] = cart[id] ? cart[id] : 0;
    let qty = parseInt(cart[id]) + 1;
    // alert(qty);
    let size = cart[id].split("-")[1];
    if (product.available_quantity < qty) {
      swal(
        "Not Enough Item",
        "We Don't Have Enough Of this Product Available!!",
        "error"
      );
    } else {
      cart[id] = qty + "-" + size;
      let total = this.state.total + 1 * product.price;
      this.setState({ ...products, total });
      localStorage.setItem("cart", JSON.stringify(cart));
      swal("Added +1 To Cart Item!", "Product Added", "success");
    }
  };

  removefromCart = product => {
    let products = this.state.products.filter(item => item.id !== product.id);
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};

    let id = product.id.toString();
    cart[id] = cart[id] ? cart[id] : 0;
    let qty = parseInt(cart[id].split("-")[0]) - 1;
    // alert(qty);
    let size = cart[id].split("-")[1];
    // alert(cart[id]);
    if (product.available_quantity < qty) {
      swal(
        "Not Enough Item",
        "We Don't Have Enough Of this Product Available!!",
        "error"
      );
    } else if (qty === 0) {
      this.removeFromCart(product);
    } else {
      cart[id] = qty + "-" + size;
      console.log(cart[id]);
      let total = this.state.total - 1 * product.price;
      // let product_qty = product.available_quantity - 1;
      this.setState({ ...products, total });
      swal(
        "Removed 1 From Cart Item!",
        "Product Removed From Cart!",
        "success"
      );
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  clearCart = () => {
    localStorage.removeItem("cart");
    this.setState({ products: [] });
    swal("Your Cart Has Been Cleared!!!", "", "success");
  };

  render() {
    const { products, total } = this.state;
    const { pageOfItems, qty } = this.state;

    return (
      <div>
        <br />
        <br />
        <br />

        <div class="container ">
          <div class="row" id="products">
            {pageOfItems.map(item => (
              <CartItem
                product={item}
                qty={this.state.qty}
                remove={this.removeFromCart}
                remove2={this.removefromCart}
                add={this.addToCart}
                key={item.id}
              />
            ))}
          </div>
          <Pagination
            items={this.state.products}
            onChangePage={this.onChangePage}
          />

          <div class="container">
            {products.length ? (
              <div>
                <h5 class="text-dark" style={{ fontSize: "13px" }}>
                  <b className="rer">Total Amount:</b>
                  <span
                    className="float-right text-dark"
                    style={{ fontSize: "21px" }}
                  >
                    <b className="rer"> ₦{total}</b>
                  </span>
                </h5>
                <hr />
              </div>
            ) : (
              ""
            )}

            {!products.length ? (
              <h3 className="text-dark">
                <b className="rer il">No item on the cart!!!</b>
                <hr />
              </h3>
            ) : (
              ""
            )}

            <Link to="/checkout">
              <button
                className="btn btn-sm btn-outline-secondary float-right rer"
                style={{ fontSize: "15px" }}
              >
                Checkout
              </button>
            </Link>
            <button
              className="btn btn-outline-secondary btn-sm float-left rer"
              onClick={this.clearCart}
              style={{ marginRight: "10px", fontSize: "15px" }}
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

// var nav = {
//   backgroundColor: "#f7f7fde0",
//   width: "100%",
//   height: "15px"
// };
var lp = {
  fontSize: "21px"
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

var nav = {
  backgroundColor: "#f7f7fde0",
  height: "40px"
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
