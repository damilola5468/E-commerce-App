import React from "react";
import swal from "sweetalert";
import { FaCartPlus, FaUserPlus, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card, Accordion, useAccordionToggle,Carousel } from "react-bootstrap/";
import "./style.css";

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      dr4:"none",
      drt:""
    };
        this.turnoff4= this.turnoff4.bind(this);
  }



      turnoff4(event) {
         this.setState({
           dr4: "none"
         });
       }

       pro(id){
           localStorage.setItem("pro_id", JSON.stringify(id));
           window.location = "/product"
       }

  handleInputChange = event =>
    this.setState({ [event.target.name]: event.target.value });




  render() {
    const { product } = this.props;
      const { dr4,drt} = this.state;

    return (
      <div className="col-md-2 mb-5 card-item  ttui">




        <Card class="card" >

        <Carousel controls={false} indicators={false} interval={false} pause={true} slide={true} fade={false} >
          <Carousel.Item>
            <div className="container">
            <h4 class="text-center">
              {" "}
              <img
                className="image-responsive hov2 hov"
                src={require(`${product.image_path}`)}
                alt="img"
              />

            </h4>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="container">
            <h4 class="text-center">
              {" "}
              <img
                className="image-responsive hov2 hov"
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
                fontSize: "12px",
                fontFamily: "noir",

              }}
            >
              <b class="rtt"> {product.name}</b>
            </h4>

            <hr />

            <h5
              class="text-dark text-center "
              style={{ fontSize: "12px", fontFamily: "Work sans,San serif" }}
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
              class="text-dark text-center gty"
              style={{ fontSize: "15px", fontFamily: "noir" }}
            >
              ₦{product.price}
            </h5>

            {product.available_quantity > 0 ? (
              <h4 class="text-dark text-center ">
                <button
                  style={{ fontSize: "15px", fontFamily: "noir" }}
                  className="btn btn-outline-secondary btn-sm"
                  onClick={()=>{
                    this.pro(product.id)}
                  }
                >
                Purchase
                </button>
                <br/>



              </h4>
            ) : (
              <h4 class="text-dark text-center">
                <button
                  style={{ fontSize: "11px", fontFamily: "noir" }}
                 className="btn btn-outline-secondary btn-sm disabled">
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



var col = {
  backgroundColor: "#eef"
};
