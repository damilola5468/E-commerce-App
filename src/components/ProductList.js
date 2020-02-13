import React from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../repository";
import { Link } from "react-router-dom";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentWillMount() {
    getProducts().then(products => {
      this.setState({ products });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className=" container">
        <h3 className="card-title">Available Products</h3>
        <hr />
        {products.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
        <hr />

        <br />
        <br />
        <br />
      </div>
    );
  }
}
