import React from "react";
import "./style.css";
import { Card, Accordion, useAccordionToggle } from "react-bootstrap/";
export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

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
                fontSize: "20px",
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

            <h5 className="card-text text-center" style={fv}>
              <span className="card-text text-secondary fv">
                Quantity:
                <span class="badge badge-secondary">{product.qty}</span>
              </span>
            </h5>

            <h4 class="text-center">
              {" "}
              <button
                className="btn btn-sm  btn-outline-secondary  "
                onClick={() => this.props.remove(product)}
              >
                Remove
              </button>
            </h4>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
var fv = {
  fontSize: "12px"
};
