import React from "react";
import { login,productby_id } from "../repository";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FaSignInAlt, FaLock, FaKey } from "react-icons/fa";
import {
  Card,
  Accordion,
  useAccordionToggle,
  Navbar,
  Nav,
  Form,
  InputGroup,
  Col,
  Carousel
} from "react-bootstrap/";
import image from "./image/watch41.png";

export default class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      dr4:"none",
      drt:"",
      product:[]
    };
  }


componentDidMount(){
    let id = localStorage.getItem("pro_id");
    productby_id(id).then(product=>{
      this.setState({product});
      console.log(this.state.product);
    })

}


  addToCart = () => {
{this.state.product.map((product,index) => {

if(parseInt(product.type) === 2){


              let cart = localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart"))
                : {};
          console.log(cart);
              let id = product.id.toString();
              cart[id] = cart[id] ? cart[id] : 0;
              console.log(cart[id]);
              console.log(id);

              let qty = parseInt(cart[id]) + parseInt(this.state.quantity);
              console.log(qty);
              if( qty >= 2){
                swal(
                  "Product Already Exist in Cart",
                  "Can't Re-Cart this Item!!",
                  "info"
                );
              }else{
              if (product.available_quantity < qty) {
                swal(
                  "Not Enough Item",
                  "We Don't Have Enough Of this Product Available!!",
                  "error"
                );
              } else {
                cart[id] = qty +"-SA";
                swal("Added To Cart!", "Product Added To Cart!", "success");
              }


              localStorage.setItem("cart", JSON.stringify(cart));
  }

















}else if(parseInt(product.type) === 1){

  swal("Select a Size", {
    buttons: {
      M: {
        text: "M",
        value: "M"
      },
      L: {
        text: "L",
        value: "L"
      },
      XL: {
        text: "XL",
        value: "XL"
      },
      cancel: true
    }
  }).then(value => {
      if(value==="M"){
          let cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : {};
          console.log(cart);
          let id = product.id.toString();
          cart[id] = cart[id] ? cart[id] : 0;
          console.log(cart[id]);
          console.log(id);

          let qty = parseInt(cart[id]) + parseInt(this.state.quantity);
          console.log(qty);
          if( qty >= 2){
            swal(
              "Product Already Exist in Cart",
              "Can't Re-Cart this Item!!",
              "info"
            );
          }else{
          if (product.available_quantity < qty) {
            swal(
              "Not Enough Item",
              "We Don't Have Enough Of this Product Available!!",
              "error"
            );
          } else {
            cart[id] = qty +"-m";
            swal("Added To Cart!", "Product Added To Cart!", "success");
          }

          localStorage.setItem("cart", JSON.stringify(cart));
}
  }else if(value==="L"){


            let cart = localStorage.getItem("cart")
              ? JSON.parse(localStorage.getItem("cart"))
              : {};
        console.log(cart);
            let id = product.id.toString();
            cart[id] = cart[id] ? cart[id] : 0;
            console.log(cart[id]);
            console.log(id);

            let qty = parseInt(cart[id]) + parseInt(this.state.quantity);
            console.log(qty);
            if( qty >= 2){
              swal(
                "Product Already Exist in Cart",
                "Can't Re-Cart this Item!!",
                "info"
              );
            }else{
            if (product.available_quantity < qty) {
              swal(
                "Not Enough Item",
                "We Don't Have Enough Of this Product Available!!",
                "error"
              );
            } else {
              cart[id] = qty +"-l";
              swal("Added To Cart!", "Product Added To Cart!", "success");
            }


            localStorage.setItem("cart", JSON.stringify(cart));
}
}else if (value==="XL") {
let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {};
console.log(cart);
let id =product.id.toString();
cart[id] = cart[id] ? cart[id] : 0;




console.log(cart[id]);
console.log(id);

let qty = parseInt(cart[id]) + parseInt(this.state.quantity);
console.log(qty);
if( qty >= 2){
  swal(
    "Product Already Exist in Cart",
    "Can't Re-Cart this Item!!",
    "info"
  );
}else{
// alert(qty);
// alert(cart[id]);
if (product.available_quantity < qty) {
  swal(
    "Not Enough Item",
    "We Don't Have Enough Of this Product Available!!",
    "error"
  );
} else {
  cart[id] = qty +"-xl";
  swal("Added To Cart!", "Product Added To Cart!", "success");
}

localStorage.setItem("cart", JSON.stringify(cart));

}
}









});


}else if(parseInt(product.type) === 3){


                let cart = localStorage.getItem("cart")
                  ? JSON.parse(localStorage.getItem("cart"))
                  : {};
            console.log(cart);
                let id = product.id.toString();
                cart[id] = cart[id] ? cart[id] : 0;
                console.log(cart[id]);
                console.log(id);

                let qty = parseInt(cart[id]) + parseInt(this.state.quantity);
                console.log(qty);
                if( qty >= 2){
                  swal(
                    "Product Already Exist in Cart",
                    "Can't Re-Cart this Item!!",
                    "info"
                  );
                }else{
                if (product.available_quantity < qty) {
                  swal(
                    "Not Enough Item",
                    "We Don't Have Enough Of this Product Available!!",
                    "error"
                  );
                } else {
                  cart[id] = qty +"-NS";
                  swal("Added To Cart!", "Product Added To Cart!", "success");
                }


                localStorage.setItem("cart", JSON.stringify(cart));
    }
}else if(parseInt(product.type) === 4){


                let cart = localStorage.getItem("cart")
                  ? JSON.parse(localStorage.getItem("cart"))
                  : {};
            console.log(cart);
                let id = product.id.toString();
                cart[id] = cart[id] ? cart[id] : 0;
                console.log(cart[id]);
                console.log(id);

                let qty = parseInt(cart[id]) + parseInt(this.state.quantity);
                console.log(qty);
                if( qty >= 2){
                  swal(
                    "Product Already Exist in Cart",
                    "Can't Re-Cart this Item!!",
                    "info"
                  );
                }else{
                if (product.available_quantity < qty) {
                  swal(
                    "Not Enough Item",
                    "We Don't Have Enough Of this Product Available!!",
                    "error"
                  );
                } else {
                  cart[id] = qty +"-P/S";
                  swal("Added To Cart!", "Product Added To Cart!", "success");
                }


                localStorage.setItem("cart", JSON.stringify(cart));
    }
}

})





};





  };







  render() {

const { product } = this.state;


    const render = <div>
    {product.map((product,index) => {

       return <div class="row">

       <div class="col-md-3">
       <Carousel controls={true} indicators={true} interval={true} pause={false} slide={true} fade={false} >
         <Carousel.Item>
           <div className="">

             {" "}
             <img
               className="image-responsive jjk"
  src={require(`${product.image_path}`)}
                         alt="img"
             />


           </div>
         </Carousel.Item>

         <Carousel.Item>
           <div className="">

             {" "}
             <img
               className="image-responsive jjk"
                src={require(`${product.image_path_2}`)}
               alt="img"
             />

           </div>
         </Carousel.Item>
       </Carousel>

       </div>

       <div class="col-md-5 mt-3">
       <h4 class="text-center jjk2">{product.name}</h4>

         <h4 class="text-center jjk3">Price: ₦{product.price}</h4>
           <h4 class="text-center jjk5">Description: {product.description} </h4>
           <h4 class="text-center jjk6">S/V: {product.size} </h4>
           <h4 class="text-dark text-center jjk7 ">
             <button
               className="btn btn-outline-secondary btn-md jjk7"
               onClick={()=>this.addToCart()}
             >
         <b class="hb">Add To Cart</b>
             </button>
             <br/>
             <br/>


           </h4>
       </div>







       </div>;


     })}


    </div>;

    return (
      <div>
      <div class="container mt-4 mb-5">




{render}
      </div>











        </div>

    );
  }
}
