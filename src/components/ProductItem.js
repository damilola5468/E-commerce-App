import React from "react";
import swal from "sweetalert";
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
      <div className="card" style={{ marginBottom: "10px" }}>
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.description}</p>
          <h5 className="card-text">
            <h6>
              <small>Price: ₦{product.price} </small>
            </h6>
          </h5>
          <span className="card-text">
            <h6>
              {" "}
              <small>Available Quantity: </small>
              <span class="badge badge-primary">
                {" "}
                {product.available_quantity}
              </span>
            </h6>
          </span>

          {product.available_quantity > 0 ? (
            <div>
              <button
                className="btn btn-sm btn-primary float-center"
                onClick={this.addToCart}
              >
                Add to cart
              </button>
              <input
                type="number"
                value={this.state.quantity}
                name="quantity"
                onChange={this.handleInputChange}
                className="float-right form-control"
                style={{
                  width: "60px",
                  marginRight: "10px",
                  borderRadius: "3px"
                }}
              />
            </div>
          ) : (
            <p className="text-danger"> Product is out of stock </p>
          )}
        </div>
      </div>
    );
  }
}
