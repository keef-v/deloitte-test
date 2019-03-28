/**
* This component  displays the cart
* It calls  other sub components to display the the cart items, the voucher 
* and the totals.
* componentWillReceiveProps(nextProps)  >> This function hook houses all the calcultions for totals when product is added or removed.
* applyVoucherDiscount >> This function will sunbtract £10 off the  total after a valid voucher is accepted
**/
import React from "react";
import PropTypes from "prop-types";
import CartItem from "./cart_item";
import CartTotals from "./cart_totals";
import Voucher from "./cart_voucher";

export default class DisplayCart extends React.Component {
  // Display Cart
  constructor(props) {
    super();
    this.state = {
      products: props.products,
      cart: props.cart,
      total: props.cart.total,
      cartItems: props.cart.cartItems,
      subTotal: props.cart.subTotal,
      discount: props.cart.discount,
      amountToMinus: props.amountToMinus,
      addVoucher: props.addVoucher,
      alert: 0
    };
    this.voucher = React.createRef();

    this.removeItem = props.removeItem;
  }
  componentWillReceiveProps(nextProps) { // This will be invoked when item is added or removed from cart

    if (nextProps !== this.props) {
      var workOutTotals = this.workOutTotals(); // to do : refactor and use this funtion to calculate totals
      let numItems = this.state.cartItems.length;
      let { price } = {
        ...nextProps.cartItems[nextProps.cartItems.length - 1]
      };
      this.setState({
        cartItems: nextProps.cartItems
      });
      if (isNaN(parseFloat(price))) price = "0.00";

      this.setState(prevstate =>
        (function() {
          // This is where the bulk of the the calculations are made. This can be refactored  so that the
          // calculation stuff is extracted out to seperate function so that you can unit test it

          if (nextProps.cartItems.length > numItems) {
            //Work out total and subtotal when adding to cart
            var total = "";
            var subTotal =
              parseFloat(prevstate.subTotal, 10) + parseFloat(price, 10);
            var subTotal = subTotal.toFixed(2).toString();
            parseFloat(prevstate.subTotal, 10) ===
            parseFloat(prevstate.total, 10)
              ? (total = subTotal)
              : (total =
                  parseFloat(prevstate.total, 10) + parseFloat(price, 10));
          } else if (
            nextProps.amountToMinus != "0.00" ||
            typeof nextProps.amountToMinus !== "string"
          ) {
            //Work out total and subtotal when removing from  cart
            var total;
            var subTotal = parseFloat(prevstate.subTotal, 10) - parseFloat(nextProps.amountToMinus, 10);
              parseFloat(prevstate.subTotal, 10) === 
              parseFloat(prevstate.total, 10)
              ? (total = subTotal)
              : (total = parseFloat(prevstate.total, 10) - parseFloat(price, 10));

            var subTotal = subTotal.toFixed(2).toString();
          }

          return { subTotal: subTotal, total: total, amountToMinus: "0.00" };
        })()
      );
    }
  }
  workOutTotals() {
    // To do : Refactor calclations to this function
    return function(a, b, c) {
      return { total: "0.00", subTotal: "00" };
    };
  }

  applyVoucherDiscount = () => {
    //To Do: Refactor and move to parent component
    // let newItem = this.newItem.current["value"];

    var newTotal = parseFloat(this.state.total, 10) - 5.0;
    newTotal = newTotal.toFixed(2).toString();
    if (newTotal < 0) newTotal = "0.00";
    var newDiscount = parseFloat(this.state.discount, 10) + 5.0;
    newDiscount = newDiscount.toFixed(2).toString();

    this.setState({ total: newTotal, discount: newDiscount });
  };
  render() {
    // Render the cart

    if (this.state.alert === 1) {
      var alert = (
        <span id="alert">Voucher code have to be a 4 digit number</span>
      );
    } else {
      var alert = "";
    }

    return (
      <div id="header" className="pure-menu pure-menu-horizontal header">
        <span className="brand">Next Fashion</span>
        <p>My shopping cart</p>
        <ul id="cart" className="pure-menu-list">
          <Voucher
            applyVoucherDiscount={this.applyVoucherDiscount}
            voucherDom={this.voucher}
            alert={this.alert}
          />
          {this.state.cartItems.map((product, i) => {
            return (
              <CartItem
                key={i}
                i={i}
                cartItem={product}
                removeItem={this.removeItem}
              />
            );
          })}
          <CartTotals subTotal={this.state.subTotal} total={this.state.total} />
        </ul>
      </div>
    );
  }
}
