import React from "react";
import PropTypes from "prop-types";
export default class CartTotals extends React.Component {
  constructor(props) {
    super();
    this.state = {
      total: props.total,
      subTotal: props.subTotal
    };
  }
  componentWillReceiveProps(nextProps) {
    this.state = { total: nextProps.total, subTotal: nextProps.subTotal };
  }
  render() {
    // Render the cart

    return (
      <li className="pure-menu-item totals">
        <span id="cart-subtotal">Sub total: {this.state.subTotal} </span>
        <span id="cart-total">Total (after discount): {this.state.total}</span>
      </li>
    );
  }
}
