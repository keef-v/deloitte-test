/**
* Deloitte digital developement test to create a shopping cart
* Author : Keerthi Viswanathan
* 
**/

import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import DisplayCart from "./components/cart/display_cart";
import DisplayProductList from "./components/products/display_product_list";
import { products } from "./products";
import "./css/pure-min.css";
import "./css/grids-responsive-min.css";
import "./css/pricing.css";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      products: props.products,
      cart: props.cart,
      total: props.cart.total,
      subTotal: props.cart.subTotal,
      voucherCodeApplied: props.cart.voucherCodeApplied,
      cartItems: props.cart.cartItems,
      amountToMinus: "0.00"
    };
    this.voucher = React.createRef();
  }
  render() {
    return (
      <div>
        <DisplayCart
          products={this.state.products}
          cart={this.state.cart}
          removeItem={this._removeItemFromCart}
          addVoucher={this._addVoucher}
          total={this.state.total}
          cartItems={this.state.cartItems}
          subTotal={this.state.subTotal}
          amountToAdd={this.statetoAdd}
          amountToMinus={this.state.amountToMinus}
        />
        <DisplayProductList
          products={this.state.products}
          addItem={this._addItemToCart}
        />
      </div>
    );
  }

  _addItemToCart = e => {
    let id = e.target.id.split("-");
    const newItem = this.state.products[id[0]].products[id[1]];
    this.setState({ cartItems: [...this.state.cartItems, newItem] });
  };

  _removeItemFromCart = e => {
    let id = e.target.id;
    let [{ cartItems }] = [{ ...this.state }];
    let amountToMinus = cartItems[id].price;
    let remove = cartItems.splice(id, 1);
    this.setState({ cartItems: [...cartItems], amountToMinus: amountToMinus });
  };

  _updateProductInStockQuantity() {} //to do:
}
App.propTypes = {
  products: PropTypes.array
};

App.defaultProps = {
  products: products,
  cart: {
    total: "0.00",
    subTotal: "0.00",
    discount: "0.00",
    voucherCodeApplied: "",
    cartItems: []
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
