import React, { Component } from "react";
import { Carousel, Button, ButtonToolbar, Card } from "react-bootstrap";
import tree from "./image/iop.webp";
import swal from "sweetalert";
import tree4 from "./image/sli3.jpg";
import tree5 from "./image/gucci1.jpg";
import pro1 from "./image/lk2.jpg";
import pro2 from "./image/pro4.jpg";
import pro3 from "./image/pro3.jpg";
import pro5 from "./image/pro5.jpg";
import pro6 from "./image/pro6.jpg";
import pro7 from "./image/pro7.jpg";
import { FaArrowsAlt, FaArrowAltCircleRight, FaUserPlus } from "react-icons/fa";
import "./style.css";
import {
  getProducts,
  product,
  category,
  getCategoryProduct
} from "../repository";
export default class Carosel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loader: false,
      category: []
    };
  }

  componentWillMount() {
    getProducts().then(products => {
      this.setState({ products });
    });

    category().then(category => {
      this.setState({ category });
      console.log(this.state.category);
    });
  }
  direct = () => {
    window.location = "/market";
  };

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
    const { products } = this.state;
    return (
      <div>
        <Carousel controls={false}>
          {/* <Carousel.Item>
            <img
              className="d-block w-100 image-responsive red"
              src={tree}
              alt="Third slide"
            />
          </Carousel.Item> */}
          {/* <Carousel.Item>
            <img
              className="d-block w-100 image-responsive"
              style={img}
              src={tree5}
              alt="Third slide"
            />
          </Carousel.Item> */}
        </Carousel>
        {/* <div style={nav}></div> */}
        <div
          className="mt-0 mb-5 p-0"
          style={{ backgroundColor: "", width: "100%" }}
        >
          {/* <h2 class="text-center">
            <b style={{ fontSize: "29px" }}>New Sale!!!</b>
          </h2> */}
          {/* <div className="container mt-5">
            <div className="row">
              <div className="col-md-4 col-sm-12 mt-3 col-xs-12">
                <Card
                  style={{
                    width: "100%",
                    height: "300px",
                    marginBottom: "0px"
                  }}
                >
                  <h4 class="text-center">
                    {" "}
                    <br />
                    <img
                      className="image-responsive hov"
                      style={img}
                      src={pro1}
                      alt="img"
                    />
                  </h4>
                  <Card.Body
                    style={{
                      width: "100%",
                      height: "400px",
                      marginBottom: "0px"
                    }}
                  ></Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12 mt-3 col-xs-12">
                <Card
                  style={{
                    width: "100%",
                    height: "300px",
                    marginBottom: "0px"
                  }}
                >
                  <h4 class="text-center">
                    {" "}
                    <br />
                    <img
                      className="image-responsive hov"
                      style={img}
                      src={pro2}
                      alt="img"
                    />
                  </h4>
                  <Card.Body
                    style={{
                      width: "100%",
                      height: "400px",
                      marginBottom: "0px"
                    }}
                  ></Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12 mt-3 col-xs-12">
                <Card
                  style={{
                    width: "100%",
                    height: "300px",
                    marginBottom: "0px"
                  }}
                >
                  <h4 class="text-center">
                    {" "}
                    <br />
                    <img
                      className="image-responsive hov"
                      style={img}
                      src={pro3}
                      alt="img"
                    />
                  </h4>
                  <Card.Body
                    style={{
                      width: "100%",
                      height: "400px",
                      marginBottom: "0px"
                    }}
                  ></Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12 mt-3 col-xs-12">
                <Card
                  style={{
                    width: "100%",
                    height: "300px",
                    marginBottom: "0px"
                  }}
                >
                  <h4 class="text-center">
                    {" "}
                    <br />
                    <img
                      className="image-responsive hov"
                      style={img}
                      src={pro5}
                      alt="img"
                    />
                  </h4>
                  <Card.Body
                    style={{
                      width: "100%",
                      height: "400px",
                      marginBottom: "0px"
                    }}
                  ></Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12 mt-3 col-xs-12">
                <Card
                  style={{
                    width: "100%",
                    height: "300px",
                    marginBottom: "0px"
                  }}
                >
                  <h4 class="text-center">
                    {" "}
                    <br />
                    <img
                      className="image-responsive hov"
                      style={img}
                      src={pro6}
                      alt="img"
                    />
                  </h4>
                  <Card.Body
                    style={{
                      width: "100%",
                      height: "400px",
                      marginBottom: "0px"
                    }}
                  ></Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12 mt-3 col-xs-12">
                <Card
                  style={{
                    width: "100%",
                    height: "300px",
                    marginBottom: "0px"
                  }}
                >
                  <h4 class="text-center">
                    {" "}
                    <br />
                    <img
                      className="image-responsive hov"
                      style={img}
                      src={pro7}
                      alt="img"
                    />
                  </h4>
                  <Card.Body
                    style={{
                      width: "100%",
                      height: "400px",
                      marginBottom: "0px"
                    }}
                  ></Card.Body>
                </Card>
              </div>
            </div>
          </div> */}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mt-0">
              <Card>
                <Card.Body>
                  <Carousel controls={true}>
                    <Carousel.Item>
                      <img
                        src={pro3}
                        alt="fjf"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Carousel.Item>
                    {/* <Carousel.Item>
                      <img
                        src={pro1}
                        alt="fjf"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Carousel.Item> */}
                    {/* <Carousel.Item>
                      <img
                        src={tree5}
                        alt="fjf"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Carousel.Item> */}
                  </Carousel>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-6 mt-5">
              <Carousel controls={false} class="mt-5">
                <Carousel.Item className="">
                  <p className="uip text-dark ">
                    <b
                      class="mt-5"
                      style={{
                        fontFamily: "Work sans,San serif",
                        fontSize: "27px"
                      }}
                    >
                      {" "}
                      New Arrival Alert!!!
                    </b>
                    <br />
                    <br />
                    Get this Sweat Shirt for as low as No repose on earth
                    around, They can to their ark repair, And enjoy it ever
                    there.
                    <br />
                    <br />
                  </p>
                </Carousel.Item>
                {/* <Carousel.Item>
                  <p
                    className="uip text-dark mt-5"
                    style={{ marginTop: "1500px" }}
                  >
                    <b
                      style={{
                        fontFamily: "Work sans,San serif",
                        fontSize: "27px",
                        marginTop: "200px"
                      }}
                    >
                      {" "}
                      Comming soon to your Store!!!
                    </b>
                    <br />
                    <br />
                    Get this Sweat Shirt for as low as No repose on earth
                    around.
                    <br />
                    <br />
                  </p>
                </Carousel.Item> */}
              </Carousel>
            </div>
          </div>
        </div>

        {/* <Carousel controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 image-responsive"
              style={img}
              src={tree4}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <br />
        <br /> */}
      </div>
    );
  }
}
var img = {
  width: "200px",
  height: "200px",
  marginTop: "9px",
  borderRadius: "5px"
};
var nav = {
  backgroundColor: "#fdfdfe",
  width: "100%",
  height: "20px"
};
