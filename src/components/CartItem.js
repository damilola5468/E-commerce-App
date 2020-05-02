import React from "react";
import "./style.css";
import swal from "sweetalert";
import { Card, Accordion, useAccordionToggle,Carousel } from "react-bootstrap/";
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
      <div className="col-md-2 mb-5 card-item rft">
        <Card class="card mb-5">
          {/* <Card.Header style={{ backgroundColor: "#fdfdf9" }}> */}

          {/* </Card.Header> */}

          <Card.Body >
          <Carousel controls={true} indicators={false} interval={false} pause={true} slide={true} fade={false} >
            <Carousel.Item>
              <div className="container hov">
              <h4 class="text-center">
                {" "}
                <img
                  className="image-responsive hov"
                  src={require(`${product.image_path}`)}
                  alt="img"
                />
              </h4>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="container hov">
              <h4 class="text-center">
                {" "}
                <img
                  className="image-responsive hov"
                  src={require(`${product.image_path_2}`)}
                  alt="img"
                />
              </h4>
              </div>
            </Carousel.Item>
          </Carousel>

            <h4
              class="text-dark text-center rtt mt-3"
              style={{
                fontSize: "10px",
                fontFamily: "noir",
                textTransform: "capitalize"
              }}
            >
              <b style={{fontSize:"15px"}}> {product.name} <span class="badge badge-secondary">{product.qty.split("-")[1]}</span></b>
            </h4>


            <hr />

            {product.available_quantity > 0 ? (
              <h4 class="text-dark text-center kkw">
                <button
                  className="btn btn-outline-secondary btn-sm"
                onClick={() => this.props.add(product)}
                >
                  +
                </button>&nbsp;

                <button
                  className="btn btn-outline-secondary btn-sm"
                onClick={() => this.props.remove2(product)}
                >
                  -
                </button>
                <br/>

              </h4>

            ) : (
              <h4 class="text-dark text-center">
                <button className="btn btn-outline-secondary btn-sm disabled">
                  Out of Stock
                </button>
              </h4>
            )}
            <h5
              class="text-dark text-center mt-3"
              style={{ fontSize: "15px", fontFamily: "noir" }}
            >
              ₦{product.price}
            </h5>

            <h5 className="card-text text-center" style={fv}>
              <span className="card-text text-secondary fv">
                Quantity:
                &nbsp;<span class="badge badge-secondary">{product.qty.split("-")[0]}</span>
              </span>
            </h5>




          </Card.Body>
        </Card>
      </div>
    );
  }
}
var img = {
  width: "170px",
  height: "170px",
  marginTop: "0px"
};
var fv = {
  fontSize: "15px"
};
