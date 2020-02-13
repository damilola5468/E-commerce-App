import React from "react";
import { Link } from "react-router-dom";
import { getCartProducts } from "../repository";
import CartItem from "./CartItem";
import swal from "sweetalert";
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
          swal("Your Product is safe!!", "", "success");
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
      <div className=" container">
        <h3 className="card-title">
          <b>Cart</b>
        </h3>
        <hr />
        {products.map((product, index) => (
          <CartItem
            product={product}
            remove={this.removeFromCart}
            key={index}
          />
        ))}
        <hr />
        {products.length ? (
          <div>
            <h4>
              <small>Total Amount:</small>
              <span className="float-right text-dark">₦{total}</span>
            </h4>
            <hr />
          </div>
        ) : (
          ""
        )}

        {!products.length ? (
          <h3 className="text-dark">No item on the cart!!!</h3>
        ) : (
          ""
        )}
        <Link to="/checkout">
          <button className="btn btn-sm btn-success float-right">
            Checkout
          </button>
        </Link>
        <button
          className="btn btn-danger btn-sm float-left"
          onClick={this.clearCart}
          style={{ marginRight: "10px" }}
        >
          Clear Cart
        </button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
