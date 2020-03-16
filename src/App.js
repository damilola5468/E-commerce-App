import React, { Component } from "react";
import Login from "./components/Login";
import Sigup from "./components/signup";
import Products from "./components/ProductList";
import Cart from "./components/Cart";
import "./css/app.css";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { isAuthenticated } from "./repository";
import Navigator from "./components/nav";
import Index from "./components/index";
import Footer from "./components/footer";

class App extends Component {
  render() {
    const auth = isAuthenticated();
    return (
      <Router>
        <div class="App">
          <Navigator />

          <Route exact path="/" component={Index} />
          <Route exact path="/market" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/signup" component={Sigup} />
          {/* <Route exact path="/admin" component={Admin} /> */}
          {!auth ? (
            <Route exact path="/login" component={Login} />
          ) : (
            this.logOut
          )}
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
